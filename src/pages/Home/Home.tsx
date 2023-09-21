import { useRef } from "react"

function Home() {
const ref = useRef<HTMLDivElement | null>(null)

  return (
    <div ref={ref} className="home">
      <div className="home-container">
        
      </div>
    </div>
  )
}
export default Home