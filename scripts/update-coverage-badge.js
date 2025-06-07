#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Function to get coverage color based on percentage
function getCoverageColor(percentage) {
  if (percentage >= 90) return 'brightgreen'
  if (percentage >= 80) return 'green'
  if (percentage >= 70) return 'yellowgreen'
  if (percentage >= 60) return 'yellow'
  if (percentage >= 50) return 'orange'
  return 'red'
}

// Function to generate badge URL
function generateBadgeUrl(label, value, color) {
  // Shields.io static badge format: /badge/label-message-color
  // Replace spaces with underscores, handle special characters properly
  const cleanLabel = label.replace(/\s+/g, '_').replace(/-/g, '--')
  const cleanValue = value.replace(/\s+/g, '_').replace(/-/g, '--').replace(/%/g, '%25')
  return `https://img.shields.io/badge/${cleanLabel}-${cleanValue}-${color}?style=flat-square`
}

// Function to update README with coverage badges
function updateReadmeWithCoverage() {
  try {
    // Read coverage summary
    const coveragePath = path.join(__dirname, '../coverage/coverage-final.json')
    if (!fs.existsSync(coveragePath)) {
      console.error('❌ Coverage file not found. Run "npm run test:coverage" first.')
      process.exit(1)
    }

    const coverageData = JSON.parse(fs.readFileSync(coveragePath, 'utf8'))
    
    // Calculate overall coverage
    let totalStatements = 0
    let coveredStatements = 0
    let totalBranches = 0
    let coveredBranches = 0
    let totalFunctions = 0
    let coveredFunctions = 0
    let totalLines = 0
    let coveredLines = 0

    Object.values(coverageData).forEach(file => {
      if (file.s) {
        totalStatements += Object.keys(file.s).length
        coveredStatements += Object.values(file.s).filter(count => count > 0).length
      }
      if (file.b) {
        Object.values(file.b).forEach(branch => {
          totalBranches += branch.length
          coveredBranches += branch.filter(count => count > 0).length
        })
      }
      if (file.f) {
        totalFunctions += Object.keys(file.f).length
        coveredFunctions += Object.values(file.f).filter(count => count > 0).length
      }
      if (file.l) {
        totalLines += Object.keys(file.l).length
        coveredLines += Object.values(file.l).filter(count => count > 0).length
      }
    })

    const statementsPercent = totalStatements > 0 ? Math.round((coveredStatements / totalStatements) * 100) : 0
    const branchesPercent = totalBranches > 0 ? Math.round((coveredBranches / totalBranches) * 100) : 100
    const functionsPercent = totalFunctions > 0 ? Math.round((coveredFunctions / totalFunctions) * 100) : 0
    const linesPercent = totalLines > 0 ? Math.round((coveredLines / totalLines) * 100) : 0

    // Generate badge URLs
    const statementsBadge = generateBadgeUrl('Coverage-Statements', `${statementsPercent}%`, getCoverageColor(statementsPercent))
    const branchesBadge = generateBadgeUrl('Coverage-Branches', `${branchesPercent}%`, getCoverageColor(branchesPercent))
    const functionsBadge = generateBadgeUrl('Coverage-Functions', `${functionsPercent}%`, getCoverageColor(functionsPercent))
    const linesBadge = generateBadgeUrl('Coverage-Lines', `${linesPercent}%`, getCoverageColor(linesPercent))

    // Debug output - show the generated URLs
    console.log('🔗 Generated badge URLs:')
    console.log('  Statements:', statementsBadge)
    console.log('  Branches:', branchesBadge)
    console.log('  Functions:', functionsBadge)
    console.log('  Lines:', linesBadge)

    // Read README
    const readmePath = path.join(__dirname, '../README.md')
    let readmeContent = fs.readFileSync(readmePath, 'utf8')

    // Update coverage badges section
    const badgeSection = `
[![Statements](${statementsBadge})](coverage/lcov-report/index.html)
[![Branches](${branchesBadge})](coverage/lcov-report/index.html)
[![Functions](${functionsBadge})](coverage/lcov-report/index.html)
[![Lines](${linesBadge})](coverage/lcov-report/index.html)

**Current Coverage Statistics:**
- **Statements:** ${statementsPercent}%
- **Branches:** ${branchesPercent}%
- **Functions:** ${functionsPercent}%
- **Lines:** ${linesPercent}%`

    // Replace the coverage section
    const badgeRegex = /\[\!\[Statements\][\s\S]*?\*\*Lines:\*\* \d+\.?\d*%/
    
    if (badgeRegex.test(readmeContent)) {
      readmeContent = readmeContent.replace(badgeRegex, badgeSection.trim())
    } else {
      // If the pattern doesn't match, look for a simpler pattern
      const simpleRegex = /\*\*Current Coverage Statistics:\*\*[\s\S]*?\*\*Lines:\*\* \d+\.?\d*%/
      if (simpleRegex.test(readmeContent)) {
        readmeContent = readmeContent.replace(simpleRegex, badgeSection.split('\n').slice(5).join('\n').trim())
      } else {
        console.log('⚠️ Could not find coverage section to replace, the badges might not be updated')
      }
    }

    // Write updated README
    fs.writeFileSync(readmePath, readmeContent)

    console.log('✅ README updated with current coverage badges!')
    console.log(`📊 Coverage: Statements ${statementsPercent}%, Branches ${branchesPercent}%, Functions ${functionsPercent}%, Lines ${linesPercent}%`)

  } catch (error) {
    console.error('❌ Error updating README:', error.message)
    process.exit(1)
  }
}

// Run if called directly
if (require.main === module) {
  updateReadmeWithCoverage()
}

module.exports = { updateReadmeWithCoverage } 