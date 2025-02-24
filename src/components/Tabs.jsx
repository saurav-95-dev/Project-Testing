
export default function Tabs() {
    const tabs = ["All", "Open", "Complete"];
    
    return (
        <nav>
            {
                tabs.map((tab , tabIndex) => {
                    return (
                        <button key={tabIndex} className="tab-button" >
                        <h3>{tab} <span>(0)</span></h3>
                        </button>
                   )
                })
            }

        </nav>
    )
}