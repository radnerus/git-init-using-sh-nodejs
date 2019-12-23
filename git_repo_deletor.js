const Octokit = require("@octokit/rest");

const arguments = process.argv;

const repoName = arguments[2];
const deleteRepository = async (repoName) => {
    if (!repoName) {
        console.log('Please provide a repo name to be deleted');
        return;
    }
    const octokit = new Octokit({
        auth: '<add your public auth token https://github.com/settings/tokens>'
    });
    try {
        await octokit.repos
            .delete({
                owner: '<ownerName>',
                repo: repoName
            });
        console.log(`${repoName} successfully deleted.`);
    } catch (error) {
        console.log(error);
        console.log(`Failed to delete ${repoName}`);
    }
}
deleteRepository(repoName);
