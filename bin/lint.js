const CLIEngine = require('eslint').CLIEngine;

module.exports = async function({ configFile, cwd, files, ignorePath, fix }) {
  const cli = new CLIEngine({
    configFile: configFile,
    useEslintrc: false,
    fix: fix,
    ignorePath: ignorePath,
    cwd: cwd,
  });
  const formatter = cli.getFormatter();
  const report = await cli.executeOnFiles(files);

  CLIEngine.outputFixes(report);

  console.log(formatter(report.results)); // eslint-disable-line
};
