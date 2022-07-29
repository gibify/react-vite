import useLocalStorage from '../hooks/useLocalStorage'

function Counter() {
  const [count, setCount] = useLocalStorage('count', 0);

  return (
    <div className="card">
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  )
}

export default Counter;
