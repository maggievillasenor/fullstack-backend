const ProjectService = require(".../services/projects");

exports.getProjects = async (req, res) => {
    try {
        let projects = await ProjectService.getProjects();
        res.json({
            projects: projects,
        });
    } catch(err) {
        console.error("err", err);
        res.status(500).json({
            message: "Project were not retrieved",
        });
    }
};

exports.createProject = async (req, res) => {
    try {
        let projectSaved = await ProjectService.createProject(req.body)
    }
}