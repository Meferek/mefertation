'use client';

import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm';
import Notes from 'reveal.js/plugin/notes/notes.esm';
import Zoom from 'reveal.js/plugin/zoom/zoom.esm';
import Search from 'reveal.js/plugin/search/search.esm';
 
const RevealPresentationClient = () => {

    const isInitialized = useRef(false);

    useEffect(() => {

        if (!isInitialized.current) {

            Reveal.initialize({
                controls: false,
                progress: true,
                slideNumber: false,
                hideInactiveCursor: true,
                hideCursorTime: 1000,
                parallaxBackgroundHorizontal: 200,
                parallaxBackgroundVertical: 50,
                plugins: [Markdown, Highlight, Notes, Zoom, Search],
            });

            isInitialized.current = true;
           
        }

    }, []);

    return (
        <div className="reveal">
            <div className="slides">
                <section data-auto-animate>
                    <h1>Poznajcie</h1>
                </section>
                <section data-auto-animate>
                    <h1>Poznajcie</h1>
                    <h2>najlepszą bibliotekę</h2>
                </section>
                <section data-auto-animate>
                    <h2 className="fade-in-then-out">najlepszą bibliotekę</h2>
                    <h1 className="fragment fade-up r-fit-text">MATPLOTLIB</h1>
                </section>
                <section data-auto-animate data-background-iframe="https://jfcpolska.pl/" data-background-opacity="0.1" data-background-transition="convex"> 
                    <h2>Nawet i to działa</h2>
                    <h3 className="fragment">no i fajnie</h3>
                </section>
                <section data-auto-animate data-background-gradient="linear-gradient(to bottom, #283b95, #17b2c3)">
                    <h1>Lubię</h1>
                </section>
                <section data-auto-animate data-background-color="aquamarine">
                    <h1>Lubię</h1>
                    <h2>Kolorki</h2>
                </section>
                <section data-auto-animate data-background-color="rgb(70, 70, 255)">
                    <h1>Lubię</h1>
                    <h2>Kolorki</h2>
                    <h2>Fajnie, znów</h2>
                </section>
                <section data-auto-animate>
                <pre data-id="code-animation"><code data-trim data-line-numbers>
                {` 
                let planets = [
                    { name: 'mars', diameter: 6779 },
                ] 
                `}
                </code></pre>
                </section>
                <section data-auto-animate>
                <pre data-id="code-animation"><code data-trim data-line-numbers>
                {`
                let planets = [
                    { name: 'mars', diameter: 6779 },
                    { name: 'earth', diameter: 12742 },
                    { name: 'jupiter', diameter: 139820 }
                ] 
                `}
                </code></pre>
                </section>
                <section data-auto-animate>
                <pre data-id="code-animation"><code data-trim data-line-numbers>
                {` 
                let circumferenceReducer = ( c, planet ) => {
                    return c + planet.diameter * Math.PI;
                }

                let planets = [
                    { name: 'mars', diameter: 6779 },
                    { name: 'earth', diameter: 12742 },
                    { name: 'jupiter', diameter: 139820 }
                ]

                let c = planets.reduce( circumferenceReducer, 0 )
                `}
                </code></pre>
                </section>
                <section data-auto-animate>
                    <h2>Slide 2</h2>
                    <p>Some content for the second slide.</p>
                    <pre><code data-trim data-noescape data-line-numbers="1|2|3-6|8|9-10">
                    {`
                    # Funkcja obliczająca sumę liczb od 1 do 10
                    def suma_liczb():
                        suma = 0
                        for i in range(1, 11):
                            suma += i
                        return suma

                    # Wywołanie funkcji i wyświetlenie wyniku
                    wynik = suma_liczb()
                    print(f"Suma liczb od 1 do 10 wynosi: {wynik}")
                    `}
                    </code></pre>
                </section>
            </div>
        </div>
    );
};

export default RevealPresentationClient;
