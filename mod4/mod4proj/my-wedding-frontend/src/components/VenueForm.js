import React from 'react'


export default class VenueCard extends React.Component {

  render(){
    return(
      <form className='ui tiny form' onChange={(event)=>this.props.handleChange(event)} onSubmit={(event)=> this.props.handleSubmit(event)}>
      <div className='equal width fields'>
      <div className='field'>
      <label>Cake</label>
      <input type="text" name="cake" placeholder='Cake...' value={this.props.propose.cake}/>
      </div>

      <div className='field'>
      <label>Theme</label>
      <input name="theme" placeholder='Theme...' value={this.props.propose.theme} />
      </div>

      <div className='field'>
      <label>Flower</label>
      <input name="flower" placeholder='Flower...' value={this.props.propose.flower} />
      </div>
      </div>

      <button type='submit' className='ui button' role='button'>
      Submit
      </button>

      <div className='ui hidden divider' />
      </form>
    )
    }
  }
