import { Component } from 'react'
import GoogleSugesstions from './components/GoogleSuggestions'
import './App.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]





class App extends Component{
  state={
    searchInput:'',
    IntialSuggestionList:suggestionsList
  }

onChange=(event)=>{
  this.setState({searchInput:event.target.value})
}
onselect=suggestion=>{
  this.setState({searchInput:suggestion})
}

  render(){
    const {searchInput,IntialSuggestionList}=this.state
    const searchResults=IntialSuggestionList.filter(each=>(
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase())
    ))
    return(
      <div className='container'>
        <div className='imageContainer'>
            <img
            className='googleImage'
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
        </div>


        <div className='list-container'>


          <div className='header'>
             <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              className="search-icon"
              alt="search icon"
            />
            <input
              onChange={this.onChange}
              value={searchInput}
              type="search"
              className="inputElement"
              
              placeholder="Search Google"
            />
          </div>


          <ul className='suggestionItems'> 
            {searchResults.map(each=>(
              <GoogleSugesstions 
              onSelectSugesstion={this.onselect}
              suggestionItem={each}
              key={each.id}
              />
            )

            )}

          
          </ul>


        </div>


      </div>
    )
  }
} 
export default App;