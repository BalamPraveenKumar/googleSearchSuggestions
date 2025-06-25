import './index.css'
const GoogleSugesstions=(props)=>{
    const {suggestionItem,onSelectSugesstion}=props
    const {id,suggestion}=suggestionItem
    const onClicked=()=>{
        onSelectSugesstion(suggestion)
    }
    return(
       <li className="suggestionItem">

        <p>{suggestion}</p>
        <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onClicked}
        
      />
       </li>
    )
}
export default GoogleSugesstions