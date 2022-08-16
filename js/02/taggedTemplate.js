const taggedTemplate = (texts, ...values) =>
        (texts.map((string,index) => 
                `${string == ' ' ? '' : `<em>${string}</em>`}${values[index] ? `<strong>${values[index].toString()}</strong>` : ''}`)
        ).join('')

export default taggedTemplate;