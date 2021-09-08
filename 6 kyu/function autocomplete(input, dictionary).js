function autocomplete(input, dictionary){
    
	dictionary = dictionary.map(el => el.replace(/\W|\d/gi, ''))
    console.log(dictionary)
    let r = new RegExp(`^${input.replace(/[^\w]/)}`, 'i')
  let arr = dictionary
  				.filter(el => 
  					r.test(el))
                .slice(0, 5)
  return arr
}

console.log(autocomplete('ai', ['airpla8ne','airport','apple','ball']) )