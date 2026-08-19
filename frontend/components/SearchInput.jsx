function SearchInput({inputDetails, option, requirements : {searchData, setSearchData, activeField, setActiveField, currentSuggestion, handleDropDownSelect}}) {
	return (
		<>
				<input name={inputDetails.name} type="text" placeholder={inputDetails.placeholder} required onChange={(e) => {setSearchData(data => (
					{...data, [option] : {...data[option] , name : e.target.value}}
					))}} onFocus={() => setActiveField(() => option)} value={searchData[option].name}
					className="px-3 py-2 focus:outline-none"/>
				{activeField === option && currentSuggestion.length > 0 && 
					<ul className="absolute z-1 mt-1 ml-1 px-2 py-1 bg-white w-[100%] rounded-md drop-shadow-md">
						{currentSuggestion.map((airpot,index) => <li key={index} onMouseDown={() => {handleDropDownSelect(airpot)}}
							className="border-b-gray-300 py-1 border-b-1  font-spartan last:border-b-0 cursor-pointer hover:bg-gray-50">
							{`${airpot.city} (${airpot?.iata})`}
						</li>)}
					</ul>
				}
		</>
	)
}
export default SearchInput;