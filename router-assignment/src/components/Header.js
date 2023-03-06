import React from 'react'

function Header() {
    return (
        <>
            <header className="site-header">
                <section className='site-logo site-width mx-auto'>
                    <h1>React Router Assignment</h1>
                </section>
                <section>
                    <nav className='site-width mx-auto'>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </section>
            </header>
        </>
    )
}

export default Header