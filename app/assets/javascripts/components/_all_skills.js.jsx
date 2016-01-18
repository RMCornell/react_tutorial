var AllSkills = React.createClass({
  // Delete handle for given skill
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  // update handle for given skill
  onUpdate(skill) {
    this.props.onUpdate(skill);
  },

  render() {
    let skills = this.props.skills.map((skill, index) => {
      return (
        // Pass this element in and use key={index} as identifier
        // Renders from _skill.js.jsx

        <div key={index}>

          <Skill skill={skill}
                 handleDelete={this.handleDelete.bind(this, skill.id)}
                 handleUpdate={this.onUpdate}/>
        </div>
      )
    });

    return (
      <div>
        {skills}
      </div>
    )
  }
});
