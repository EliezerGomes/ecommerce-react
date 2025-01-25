import "./index.css"

export function Carousel() {
    return (
        <div className="container-carosel">
            <img src="src/assets/carrosel-banner.jpg" alt="Banner" width={"100%"} />

            <div className="column-info">
                <h1>Confira as novidades!</h1>
                <button>Clique aqui</button>
            </div>
        </div>
    )
}