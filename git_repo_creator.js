const Octokit = require("@octokit/rest");

const arguments = process.argv;

const repoName = arguments[2];
const createRepository = async (repoName) => {
  const octokit = new Octokit({
    auth: '<add your public auth token https://github.com/settings/tokens>'
  });
  try {
    const repo = await octokit.repos
      .createForAuthenticatedUser({
        name: repoName
      });
      console.log(repo.data.clone_url);
  } catch (error) {
      console.log(repoName);
  }
}
createRepository(repoName);
