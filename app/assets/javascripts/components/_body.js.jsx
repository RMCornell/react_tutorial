var Body = React.createClass({
  // Get Initial state returning an empty skills array
  getInitialState() {
    return { skills: [] }
  },

  // if components mounts fire JSON request skills from rails v1 api
  componentDidMount() {
    $.getJSON('/api/v1/skills.json',
      (response) => {
        this.setState({ skills: response
        })
      });
  },

  handleSubmit(skill) {
    let newState = this.state.skills.concat(skill);
    this.setState({ skills: newState })
  },

  // Delete handle with ajax call.
  handleDelete(id) {
    $.ajax({
      url: `/api/v1/skills/${id}`,
      type: 'DELETE',
      // On success of ajax call remove element from ID
      success: () => {
        this.removeIdeaFromDOM(id);
      }
    });
  },

  // Remove idea from dom method called in ajax success call above
  removeIdeaFromDOM(id) {
    let newSkills = this.state.skills.filter((skill) => {
      return skill.id != id;
    });

    this.setState({ skills: newSkills });
  },

  // Update skill with ajax call to rails V1 API
  handleUpdate(skill) {
    $.ajax({
      // Ajax call to rails created api
      url: `/api/v1/skills/${skill.id}`,
      type: 'PUT',
      data: { skill: skill },
      // on success update the skill
      success: (skill) => {
        console.log("updated!")
      }
    });
  },

  render() {
    return (
      // Render new skill from new_skill.js.jsx
      // Render all skills from _all_skill.js.jsx
      <div>
        <NewSkill handleSubmit={this.handleSubmit} />


        <AllSkills skills={this.state.skills}
                   handleDelete={this.handleDelete}
                   onUpdate={this.handleUpdate} />
      </div>
    )
  }
});
