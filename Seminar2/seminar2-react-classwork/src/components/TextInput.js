import { useState } from 'react';

function TextInput() {
    const [value, setValue] = useState('');

    return (
        <>
            <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                placeholder="Input some text here" />
            <p>{value}</p>
        </>
    )

}

export default TextInput;