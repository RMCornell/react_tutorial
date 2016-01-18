var NewSkill = React.createClass({

  handleClick() {
    // set variables for name and detials
    let name    = this.refs.name.value;
    let details = this.refs.details.value;




    // make ajax call and on success submit skill
    $.ajax({
      url: '/api/v1/skills',
      type: 'POST',
      data: { skill: {
        name: name,
        details: details }
      },
      success: (skill) => {
        this.props.handleSubmit(skill);
      }
    });
  },

  render() {
    return (
      <div>
        <input ref='name' placeholder='Enter skill' />
        <input ref='details' placeholder='Skill details' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});
