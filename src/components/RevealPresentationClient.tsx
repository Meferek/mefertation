'use client';

import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm';
import Notes from 'reveal.js/plugin/notes/notes.esm';
import Zoom from 'reveal.js/plugin/zoom/zoom.esm';
import Search from 'reveal.js/plugin/search/search.esm';
import Image from 'next/image';
 
const RevealPresentationClient = () => {

    const isInitialized = useRef(false);

    useEffect(() => {

        if (!isInitialized.current) {

            Reveal.initialize({
                controls: true,
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
                    <h1>Pie Chart</h1>
                </section>

                <section data-auto-animate>
                    <h1>Pie Chart</h1>
                    <h3>Czyli wykres kołowy</h3>
                </section>

                <section data-auto-animate>
                    <section data-auto-animate>
                        <h6>Pie Chart</h6>
                        <h3>Czym jest Pie Chart?</h3>
                    </section>
                    <section data-auto-animate>
                        <h3>Czym jest Pie Chart?</h3>
                        <p>Rodzaj wykresu</p>
                    </section>
                    <section data-auto-animate>
                        <h3>Czym jest Pie Chart?</h3>
                        <p>Rodzaj wykresu</p>
                        <p>Wizualizacja proporcji</p>
                    </section>
                    <section data-auto-animate>
                        <h3>Czym jest Pie Chart?</h3>
                        <p>Rodzaj wykresu</p>
                        <p>Wizualizacja proporcji</p>
                        <p>Prezentuje udział każdej kategorii w całości</p>
                    </section>
                </section>

                <section data-auto-animate>
                    <section data-auto-animate>
                        <h6>Pie Chart</h6>
                        <h3>Kiedy korzystamy z Pie Chart?</h3>
                    </section>
                    <section data-auto-animate>
                        <h3>Kiedy korzystamy z Pie Chart?</h3>
                        <p>Procentowy udział</p>
                    </section>
                    <section data-auto-animate>
                        <h3>Kiedy korzystamy z Pie Chart?</h3>
                        <p>Procentowy udział</p>
                        <p>Analiza proporcji</p> 
                    </section>
                    <section data-auto-animate>
                        <h3>Kiedy korzystamy z Pie Chart?</h3>
                        <p>Procentowy udział</p>
                        <p>Analiza proporcji</p> 
                        <p>Mała liczba kategorii</p>
                    </section>
                </section>

                <section data-auto-animate>
                    <section data-auto-animate>
                        <h6>Pie Chart</h6>
                        <h3 className="r-fit-text">Kiedy <strong>NIE</strong> korzystamy z Pie Chart?</h3>
                    </section>
                    <section data-auto-animate>
                        <h3 className="r-fit-text">Kiedy <strong>NIE</strong> korzystamy z Pie Chart?</h3>
                        <p>Zbyt wiele kategorii</p>
                    </section>
                    <section data-auto-animate data-background-color="white">
                        <p>Zbyt wiele kategorii</p>
                        <Image
                            src="/1/charts/1.png"
                            width="500"
                            height="500"
                            alt="Pie Chart 1"
                            className='r-fit-text'
                        />
                    </section>
                    <section data-auto-animate>
                        <h3 className="r-fit-text">Kiedy <strong>NIE</strong> korzystamy z Pie Chart?</h3>
                        <p>Zbyt wiele kategorii</p>
                    </section>
                    <section data-auto-animate>
                        <h3 className="r-fit-text">Kiedy <strong>NIE</strong> korzystamy z Pie Chart?</h3>
                        <p>Zbyt wiele kategorii</p>
                        <p>Małe różnice w wartościach</p>
                    </section>
                    <section data-auto-animate data-background-color="white">
                        <p>Małe różnice w wartościach</p>
                        <Image
                            src="/1/charts/2.png"
                            width="500"
                            height="500"
                            alt="Pie Chart 1"
                            className='r-fit-text'
                        />
                    </section>
                    <section data-auto-animate>
                        <h3 className="r-fit-text">Kiedy <strong>NIE</strong> korzystamy z Pie Chart?</h3>
                        <p>Zbyt wiele kategorii</p>
                        <p>Małe różnice w wartościach</p>
                    </section>
                    <section data-auto-animate>
                        <h3 className="r-fit-text">Kiedy <strong>NIE</strong> korzystamy z Pie Chart?</h3>
                        <p>Zbyt wiele kategorii</p>
                        <p>Małe różnice w wartościach</p>
                        <p>Nieodpowiednie do porównania</p>
                    </section>
                    <section data-auto-animate data-background-color="white">
                        <p>Nieodpowiednie do porównania</p>
                        <Image
                            src="/1/charts/3.png"
                            width="500"
                            height="500"
                            alt="Pie Chart 1"
                            className='r-fit-text'
                        />
                    </section>
                    <section data-auto-animate>
                        <h3 className="r-fit-text">Kiedy <strong>NIE</strong> korzystamy z Pie Chart?</h3>
                        <p>Zbyt wiele kategorii</p>
                        <p>Małe różnice w wartościach</p>
                        <p>Nieodpowiednie do porównania</p>
                    </section>
                </section>

                <section data-auto-animate>
                    <section data-auto-animate>
                        <h6>Pie Chart</h6>
                        <h3>Dostępne biblioteki</h3>
                    </section>
                    <section data-auto-animate>
                        <h3>Dostępne biblioteki</h3>
                        <ul>
                            <li>Matplotlib</li>
                        </ul>
                    </section>
                    <section data-auto-animate>
                        <h3>Dostępne biblioteki</h3>
                        <ul>
                            <li>Matplotlib</li>
                            <li>Seaborn</li>
                        </ul>
                    </section>
                    <section data-auto-animate>
                        <h3>Dostępne biblioteki</h3>
                        <ul>
                            <li>Matplotlib</li>
                            <li>Seaborn</li>
                            <li>Plotly</li>
                        </ul>
                    </section>
                   <section data-auto-animate>                        
                        <h3>Dostępne biblioteki</h3>
                        <ul>
                            <li>Matplotlib</li>
                            <li>Seaborn</li>
                            <li>Plotly</li>
                            <li>Bokeh</li>
                        </ul>
                    </section>
                </section>

                <section>
                    <h3>Co finalnie wybraliśmy?</h3>
                </section>

                <section data-auto-animate>
                    <section data-auto-animate>
                        <h1>Matplotlib</h1>
                    </section>
                    <section data-auto-animate>
                        <h1>Matplotlib</h1>
                        <h3>Instalacja</h3>
                    </section>
                    <section data-auto-animate>
                        <h3>Instalacja</h3>
                        <pre><code className="font-mono" data-trim data-line-numbers="1|2">
                            {`
                            pip install matplotlib
                            import matplotlib.pyplot as plt
                            `}
                        </code></pre>
                    </section>
                    <section data-auto-animate>
                        <h1>Matplotlib</h1>
                        <h3>Instalacja</h3>
                    </section>
                    <section data-auto-animate>
                        <h1>Matplotlib</h1>
                    </section>
                    <section data-auto-animate>
                        <h1>Matplotlib</h1>
                        <h3>Podstawowa implementacja</h3>
                    </section>
                    <section data-auto-animate>  
                        <h3>Podstawowa implementacja</h3>
                        <pre><code className="font-mono" data-trim data-line-numbers="1|3-4|6|7|1-7">
                            {`
                            import matplotlib.pyplot as plt

                            labels = ['Mateusz', 'Jakub', 'Radek', 'ChatGPT']
                            sizes = [30, 30, 30, 10]

                            fig, ax = plt.subplots()
                            ax.pie(sizes, labels=labels)
                            `}
                        </code></pre>
                    </section>
                    <section data-auto-animate data-background-color="white">
                        <h3>Podstawowa implementacja</h3>
                        <Image
                            src="/1/charts/4.png"
                            width="500"
                            height="500"
                            alt="Pie Chart 1"
                            className='r-fit-text'
                        />
                    </section>
                    <section data-auto-animate>
                        <h1>Matplotlib</h1>
                        <h3>Podstawowa implementacja</h3>
                    </section>

                    <section data-auto-animate>
                        <h1>Matplotlib</h1>
                        <h3>Parametry</h3>
                    </section>

                    {/* PARAMETR SIZES */}
                    <section data-auto-animate>
                        <h3>Parametry</h3>
                        <p><kbd>sizes</kbd></p>
                    </section>
                    <section data-auto-animate>  
                        <h3>Parametry</h3>
                        <p><kbd>sizes</kbd></p>
                        <pre><code className="font-mono" data-trim data-line-numbers="4,9">
                            {`
                            import matplotlib.pyplot as plt

                            labels = ['A', 'B', 'C', 'D']
                            sizes = [10, 10, 10, 70]

                            fig, ax = plt.subplots()
                            fig.patch.set_facecolor('none')
                            ax.set_facecolor('none') 
                            ax.pie(sizes, labels=labels)
                            `}
                        </code></pre>
                        <h6 className="text-sm">KRÓTKI TEKST OBJAŚNIAJĄCY</h6>
                    </section>
                    <section data-auto-animate data-background-color="white">
                        <h3>Parametry</h3>
                        <p><kbd>sizes</kbd></p>
                        <Image
                            src="/1/charts/parameters/1.png"
                            width="400"
                            height="400"
                            alt="Pie Chart 1"
                            className='r-fit-text'
                        />
                    </section>

                    {/* PARAMETR LABLES */}
                    <section data-auto-animate>
                        <h3>Parametry</h3>
                        <p><kbd>labels</kbd></p>
                    </section>
                    <section data-auto-animate>  
                        <h3>Parametry</h3>
                        <p><kbd>labels</kbd></p>
                        <pre><code className="font-mono" data-trim data-line-numbers='3,9'>
                            {`
                            import matplotlib.pyplot as plt

                            labels = ['Alaska', 'Brazylia', 'Częstochowa', 'Dortmund']
                            sizes = [30, 30, 30, 10]

                            fig, ax = plt.subplots()
                            fig.patch.set_facecolor('none')
                            ax.set_facecolor('none') 
                            ax.pie(sizes, labels=labels)
                            `}
                        </code></pre>
                        <h6 className="text-sm">KRÓTKI TEKST OBJAŚNIAJĄCY</h6>
                    </section>
                    <section data-auto-animate data-background-color="white">
                        <h3>Parametry</h3>
                        <p><kbd>labels</kbd></p>
                        <Image
                            src="/1/charts/parameters/2.png"
                            width="400"
                            height="400"
                            alt="Pie Chart 1"
                            className='r-fit-text'
                        />
                    </section>

                    {/* PARAMETR COLORS */}
                    <section data-auto-animate>
                        <h3>Parametry</h3>
                        <p><kbd>colors</kbd></p>
                    </section>
                    <section data-auto-animate>  
                        <h3>Parametry</h3>
                        <p><kbd>colors</kbd></p>
                        <pre><code className="font-mono" data-trim data-line-numbers='5,11'>
                            {`
                            import matplotlib.pyplot as plt

                            labels = ['A', 'B', 'C', 'D']
                            sizes = [30, 30, 30, 10]
                            colors = ['green', 'teal', 'purple', 'brown']


                            fig, ax = plt.subplots()
                            fig.patch.set_facecolor('none')
                            ax.set_facecolor('none') 
                            ax.pie(sizes, labels=labels, colors=colors)
                            `}
                        </code></pre>
                        <h6 className="text-sm">KRÓTKI TEKST OBJAŚNIAJĄCY</h6>
                    </section>
                    <section data-auto-animate data-background-color="white">
                        <h3>Parametry</h3>
                        <p><kbd>colors</kbd></p>
                        <Image
                            src="/1/charts/parameters/3.png"
                            width="400"
                            height="400"
                            alt="Pie Chart 1"
                            className='r-fit-text'
                        />
                    </section>

                    {/* PARAMETR AUTOPCT */}
                    <section data-auto-animate>
                        <h3>Parametry</h3>
                        <p><kbd>autopct</kbd></p>
                    </section>
                    <section data-auto-animate>  
                        <h3>Parametry</h3>
                        <p><kbd>autopct</kbd></p>
                        <pre><code className="font-mono" data-trim data-line-numbers='10'>
                            {`
                            import matplotlib.pyplot as plt

                            labels = ['A', 'B', 'C', 'D']
                            sizes = [30, 30, 30, 10]


                            fig, ax = plt.subplots()
                            fig.patch.set_facecolor('none')
                            ax.set_facecolor('none') 
                            ax.pie(sizes, labels=labels, autopct='%.1f%%')
                            `}
                        </code></pre>
                        <h6 className="text-sm">KRÓTKI TEKST OBJAŚNIAJĄCY</h6>
                    </section>
                    <section data-auto-animate data-background-color="white">
                        <h3>Parametry</h3>
                        <p><kbd>autopct</kbd></p>
                        <Image
                            src="/1/charts/parameters/4.png"
                            width="400"
                            height="400"
                            alt="Pie Chart 1"
                            className='r-fit-text'
                        />
                    </section>

                    {/* PARAMETR EXPLODE */}
                    <section data-auto-animate>
                        <h3>Parametry</h3>
                        <p><kbd>explode</kbd></p>
                    </section>
                    <section data-auto-animate>  
                        <h3>Parametry</h3>
                        <p><kbd>explode</kbd></p>
                        <pre><code className="font-mono" data-trim data-line-numbers='5,10'>
                            {`
                            import matplotlib.pyplot as plt

                            labels = ['A', 'B', 'C', 'D']
                            sizes = [30, 30, 30, 10]
                            explode = [0.1, 0, 0, 0]

                            fig, ax = plt.subplots()
                            fig.patch.set_facecolor('none')
                            ax.set_facecolor('none') 
                            ax.pie(sizes, labels=labels, explode=explode)
                            `}
                        </code></pre>
                        <h6 className="text-sm">KRÓTKI TEKST OBJAŚNIAJĄCY</h6>
                    </section>
                    <section data-auto-animate data-background-color="white">
                        <h3>Parametry</h3>
                        <p><kbd>explode</kbd></p>
                        <Image
                            src="/1/charts/parameters/5.png"
                            width="400"
                            height="400"
                            alt="Pie Chart 1"
                            className='r-fit-text'
                        />
                    </section>

                    {/* PARAMETR STARTANGLE */}
                    <section data-auto-animate>
                        <h3>Parametry</h3>
                        <p><kbd>startangle</kbd></p>
                    </section>
                    <section data-auto-animate>  
                        <h3>Parametry</h3>
                        <p><kbd>startangle</kbd></p>
                        <pre><code className="font-mono" data-trim data-line-numbers='9'>
                            {`
                            import matplotlib.pyplot as plt

                            labels = ['A', 'B', 'C', 'D']
                            sizes = [30, 30, 30, 10]

                            fig, ax = plt.subplots()
                            fig.patch.set_facecolor('none')
                            ax.set_facecolor('none') 
                            ax.pie(sizes, labels=labels, startangle=120)
                            `}
                        </code></pre>
                        <h6 className="text-sm">KRÓTKI TEKST OBJAŚNIAJĄCY</h6>
                    </section>
                    <section data-auto-animate data-background-color="white">
                        <h3>Parametry</h3>
                        <p><kbd>startangle</kbd></p>
                        <Image
                            src="/1/charts/parameters/6.png"
                            width="400"
                            height="400"
                            alt="Pie Chart 1"
                            className='r-fit-text'
                        />
                    </section>

                    {/* PARAMETR SHADOW */}
                    <section data-auto-animate>
                        <h3>Parametry</h3>
                        <p><kbd>shadow</kbd></p>
                    </section>
                    <section data-auto-animate>  
                        <h3>Parametry</h3>
                        <p><kbd>shadow</kbd></p>
                        <pre><code className="font-mono" data-trim data-line-numbers='9'>
                            {`
                            import matplotlib.pyplot as plt

                            labels = ['A', 'B', 'C', 'D']
                            sizes = [30, 30, 30, 10]

                            fig, ax = plt.subplots()
                            fig.patch.set_facecolor('none')
                            ax.set_facecolor('none') 
                            ax.pie(sizes, labels=labels, shadow=True)
                            `}
                        </code></pre>
                        <h6 className="text-sm">KRÓTKI TEKST OBJAŚNIAJĄCY</h6>
                    </section>
                    <section data-auto-animate data-background-color="white">
                        <h3>Parametry</h3>
                        <p><kbd>shadow</kbd></p>
                        <Image
                            src="/1/charts/parameters/7.png"
                            width="400"
                            height="400"
                            alt="Pie Chart 1"
                            className='r-fit-text'
                        />
                    </section>

                    {/* PARAMETR RADIUS */}
                    <section data-auto-animate>
                        <h3>Parametry</h3>
                        <p><kbd>radius</kbd></p>
                    </section>
                    <section data-auto-animate>  
                        <h3>Parametry</h3>
                        <p><kbd>radius</kbd></p>
                        <pre><code className="font-mono" data-trim data-line-numbers='9'>
                            {`
                            import matplotlib.pyplot as plt

                            labels = ['A', 'B', 'C', 'D']
                            sizes = [30, 30, 30, 10]

                            fig, ax = plt.subplots()
                            fig.patch.set_facecolor('none')
                            ax.set_facecolor('none') 
                            ax.pie(sizes, labels=labels, radius=0.2)
                            `}
                        </code></pre>
                        <h6 className="text-sm">KRÓTKI TEKST OBJAŚNIAJĄCY</h6>
                    </section>
                    <section data-auto-animate data-background-color="white">
                        <h3>Parametry</h3>
                        <p><kbd>radius</kbd></p>
                        <Image
                            src="/1/charts/parameters/8.png"
                            width="400"
                            height="400"
                            alt="Pie Chart 1"
                            className='r-fit-text'
                        />
                    </section>

                    {/* PARAMETR TEXTPROPS */}
                    <section data-auto-animate>
                        <h3>Parametry</h3>
                        <p><kbd>textprops</kbd></p>
                    </section>
                    <section data-auto-animate>  
                        <h3>Parametry</h3>
                        <p><kbd>textprops</kbd></p>
                        <pre><code className="font-mono" data-trim data-line-numbers='9'>
                            {`
                            import matplotlib.pyplot as plt

                            labels = ['A', 'B', 'C', 'D']
                            sizes = [30, 30, 30, 10]

                            fig, ax = plt.subplots()
                            fig.patch.set_facecolor('none')
                            ax.set_facecolor('none') 
                            ax.pie(sizes, labels=labels, textprops={'color': 'red','fontsize': '20'})
                            `}
                        </code></pre>
                        <h6 className="text-sm">KRÓTKI TEKST OBJAŚNIAJĄCY</h6>
                    </section>
                    <section data-auto-animate data-background-color="white">
                        <h3>Parametry</h3>
                        <p><kbd>textprops</kbd></p>
                        <Image
                            src="/1/charts/parameters/9.png"
                            width="400"
                            height="400"
                            alt="Pie Chart 1"
                            className='r-fit-text'
                        />
                    </section>

                    {/* PARAMETR COUNTERCLOCK */}
                    <section data-auto-animate>
                        <h3>Parametry</h3>
                        <p><kbd>counterclock</kbd></p>
                    </section>
                    <section data-auto-animate>  
                        <h3>Parametry</h3>
                        <p><kbd>counterclock</kbd></p>
                        <pre><code className="font-mono" data-trim data-line-numbers='9'>
                            {`
                            import matplotlib.pyplot as plt

                            labels = ['A', 'B', 'C', 'D']
                            sizes = [30, 30, 30, 10]

                            fig, ax = plt.subplots()
                            fig.patch.set_facecolor('none')
                            ax.set_facecolor('none') 
                            ax.pie(sizes, labels=labels, counterclock=False)
                            `}
                        </code></pre>
                        <h6 className="text-sm">KRÓTKI TEKST OBJAŚNIAJĄCY</h6>
                    </section>
                    <section data-auto-animate data-background-color="white">
                        <h3>Parametry</h3>
                        <p><kbd>counterclock</kbd></p>
                        <Image
                            src="/1/charts/parameters/10.png"
                            width="400"
                            height="400"
                            alt="Pie Chart 1"
                            className='r-fit-text'
                        />
                    </section>

                    {/* PARAMETR WEDGEPROPS */}
                    <section data-auto-animate>
                        <h3>Parametry</h3>
                        <p><kbd>wedgeprops</kbd></p>
                    </section>
                    <section data-auto-animate>  
                        <h3>Parametry</h3>
                        <p><kbd>wedgeprops</kbd></p>
                        <pre><code className="font-mono" data-trim data-line-numbers>
                            {`
                            import matplotlib.pyplot as plt

                            labels = ['A', 'B', 'C', 'D']
                            sizes = [30, 30, 30, 10]

                            fig, ax = plt.subplots()
                            fig.patch.set_facecolor('none')
                            ax.set_facecolor('none') 
                            ax.pie(sizes, labels=labels, wedgeprops={'edgecolor': 'black', 'linewidth': 2, 'linestyle': 'dashed'})
                            `}
                        </code></pre>
                        <h6 className="text-sm">KRÓTKI TEKST OBJAŚNIAJĄCY</h6>
                    </section>
                    <section data-auto-animate data-background-color="white">
                        <h3>Parametry</h3>
                        <p><kbd>wedgeprops</kbd></p>
                        <Image
                            src="/1/charts/parameters/11.png"
                            width="500"
                            height="500"
                            alt="Pie Chart 1"
                            className='r-fit-text'
                        />
                    </section>

                    {/* PARAMETR PCTDISTANCE */}
                    <section data-auto-animate>
                        <h3>Parametry</h3>
                        <p><kbd>pctdistance</kbd></p>
                    </section>
                    <section data-auto-animate>  
                        <h3>Parametry</h3>
                        <p><kbd>pctdistance</kbd></p>
                        <pre><code className="font-mono" data-trim data-line-numbers='9'>
                            {`
                            import matplotlib.pyplot as plt

                            labels = ['A', 'B', 'C', 'D']
                            sizes = [30, 30, 30, 10]

                            fig, ax = plt.subplots()
                            fig.patch.set_facecolor('none')
                            ax.set_facecolor('none') 
                            ax.pie(sizes, labels=labels, autopct='%.1f%%', pctdistance=0.85)
                            `}
                        </code></pre>
                        <h6 className="text-sm">KRÓTKI TEKST OBJAŚNIAJĄCY</h6>
                    </section>
                    <section data-auto-animate data-background-color="white">
                        <h3>Parametry</h3>
                        <p><kbd>pctdistance</kbd></p>
                        <Image
                            src="/1/charts/parameters/12.png"
                            width="500"
                            height="500"
                            alt="Pie Chart 1"
                            className='r-fit-text'
                        />
                    </section>

                    {/* PARAMETR LABELDISTANCE */}
                    <section data-auto-animate>
                        <h3>Parametry</h3>
                        <p><kbd>labeldistance</kbd></p>
                    </section>
                    <section data-auto-animate>  
                        <h3>Parametry</h3>
                        <p><kbd>labeldistance</kbd></p>
                        <pre><code className="font-mono" data-trim data-line-numbers='9'>
                            {`
                            import matplotlib.pyplot as plt

                            labels = ['A', 'B', 'C', 'D']
                            sizes = [30, 30, 30, 10]

                            fig, ax = plt.subplots()
                            fig.patch.set_facecolor('none')
                            ax.set_facecolor('none') 
                            ax.pie(sizes, labels=labels, labeldistance=0.5)
                            `}
                        </code></pre>
                        <h6 className="text-sm">KRÓTKI TEKST OBJAŚNIAJĄCY</h6>
                    </section>
                    <section data-auto-animate data-background-color="white">
                        <h3>Parametry</h3>
                        <p><kbd>labeldistance</kbd></p>
                        <Image
                            src="/1/charts/parameters/13.png"
                            width="500"
                            height="500"
                            alt="Pie Chart 1"
                            className='r-fit-text'
                        />
                    </section>

                    {/* PARAMETR ROTATELABELS */}
                    <section data-auto-animate>
                        <h3>Parametry</h3>
                        <p><kbd>rotatelabels</kbd></p>
                    </section>
                    <section data-auto-animate>  
                        <h3>Parametry</h3>
                        <p><kbd>rotatelabels</kbd></p>
                        <pre><code className="font-mono" data-trim data-line-numbers>
                            {`
                            import matplotlib.pyplot as plt

                            labels = ['Ab', 'Bc', 'Cd', 'De']
                            sizes = [30, 30, 30, 10]

                            fig, ax = plt.subplots()
                            fig.patch.set_facecolor('none')
                            ax.set_facecolor('none') 
                            ax.pie(sizes, labels=labels, rotatelabels=True)
                            `}
                        </code></pre>
                        <h6 className="text-sm">KRÓTKI TEKST OBJAŚNIAJĄCY</h6>
                    </section>
                    <section data-auto-animate data-background-color="white">
                        <h3>Parametry</h3>
                        <p><kbd>rotatelabels</kbd></p>
                        <Image
                            src="/1/charts/parameters/14.png"
                            width="500"
                            height="500"
                            alt="Pie Chart 1"
                            className='r-fit-text'
                        />
                    </section>
                </section>
                
                <section data-background-iframe="http://localhost:8888/tree" data-background-color="white" data-background-interactive>
                </section>

                <section data-auto-animate>
                    <section data-auto-animate>
                        <h1 className="r-fit-text">A na koniec...</h1>
                    </section>
                    <section data-auto-animate>
                        <h1 className="r-fit-text">A na koniec...</h1>
                        <h2 className="r-fit-text">mamy dla was...</h2>
                    </section>
                    <section data-auto-animate>
                        <h1 className="r-fit-text">A na koniec...</h1>
                        <h2 className="r-fit-text">mamy dla was...</h2>
                        <h2 className="r-fit-text">NIESPODZIANKĘ</h2>
                    </section>
                </section>

                <section data-auto-animate>
                    <h3 className="r-fit-text">Każda nasza prezentacja jest dostępna online</h3>
                    <Image
                        src="/global/QR.png"
                        width="500"
                        height="500"
                        alt="Pie Chart 1"
                        className='r-fit-text'
                    />
                    <p className="fragment text-sm">Wraz z kodami źródłowymi</p>
                </section>
                
                <section data-auto-animate>
                    <section data-auto-animate>
                        <h2 className="r-fit-text">Dziękujemy! 😊</h2>
                    </section>
                    <section data-auto-animate>
                        <h2 className="r-fit-text">Dziękujemy! 😊</h2>
                        <p>Mateusz Krysiak</p>
                        <p>Jakub Grabowski</p>
                        <p>Radosław Mróz</p>
                    </section>
                    <section data-auto-animate>
                        <h2 className="r-fit-text">Dziękujemy! 😊</h2>
                    </section>
                </section>

                {/* <section data-auto-animate>
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
                <pre data-id="code-animation"><code className="font-mono" data-trim data-line-numbers>
                {` 
                let planets = [
                    { name: 'mars', diameter: 6779 },
                ] 
                `}
                </code></pre>
                </section>
                <section data-auto-animate>
                <pre data-id="code-animation"><code className="font-mono" data-trim data-line-numbers>
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
                <pre data-id="code-animation"><code className="font-mono" data-trim data-line-numbers>
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
                    <pre><code className="font-mono" data-trim data-noescape data-line-numbers="1|2|3-6|8|9-10">
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
                </section> */}
              
            </div>
        </div>
    );
};

export default RevealPresentationClient;
