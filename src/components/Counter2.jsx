import { useState, useEffect } from "react"

function Counter2() {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        document.title = `You clicked ${counter} times.`
    }, [counter])
    return (
        <>
            <h1>You clicked the button {counter} times.</h1>
            <button onClick={() => setCounter(counter + 1)}>
                Click Me!
            </button>
        </>
    )
}

 export default Counter2