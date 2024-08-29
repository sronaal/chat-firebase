const RootLayout = () => {


    const user =  false
    return (
        
        <div> { user ? <h1>Bievenido de vuelta</h1> : <h1>Iniciar sesión</h1> } </div>
    )
}

export default RootLayout