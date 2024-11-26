'use client';

import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm';
import Notes from 'reveal.js/plugin/notes/notes.esm';
import Zoom from 'reveal.js/plugin/zoom/zoom.esm';
import Search from 'reveal.js/plugin/search/search.esm';
import Image from 'next/image';
 
const RevealPresentationClient2 = () => {

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
                    <section data-auto-animate>
                        <h1>Pandas</h1>
                    </section>

                    <section data-auto-animate>
                        <h1>Pandas</h1>
                        <h3>Czyli biblioteka open-source napisana w Pythonie</h3>
                    </section>
                </section>

                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Główne struktury danych w Pandas</h3>
                    </section>
                    <section data-auto-animate>
                        <h3>Główne struktury danych w Pandas</h3>
                        <p>Series</p>
                    </section>
                    <section data-auto-animate>
                        <h3>Główne struktury danych w Pandas</h3>
                        <p>Series</p>
                        <p>DataFrame</p>
                    </section>
                </section >

                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Zastosowania Pandas</h3>
                    </section>
                    <section data-auto-animate>
                        <h3>Zastosowania Pandas</h3>
                        <p>analiza danych</p>
                    </section>
                    <section data-auto-animate>
                        <h3>Zastosowania Pandas</h3>
                        <p>analiza danych</p>
                        <p>przetwarzanie danych</p>
                    </section>
                    <section data-auto-animate>
                        <h3>Zastosowania Pandas</h3>
                        <p>analiza danych</p>
                        <p>przetwarzanie danych</p>
                        <p>przygotowanie danych do ML</p>
                    </section>
                </section>

                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Zalety Pandas</h3>
                    </section>
                    <section data-auto-animate>
                        <h3>Zalety Pandas</h3>
                        <p>intuicyjna składnia</p>
                    </section>
                    <section data-auto-animate>
                        <h3>Zalety Pandas</h3>
                        <p>intuicyjna składnia</p>
                        <p>łatwość integracji z innymi bibliotekami (NumPy, Matplotlib)</p>
                    </section>
                    <section data-auto-animate>
                        <h3>Zalety Pandas</h3>
                        <p>intuicyjna składnia</p>
                        <p>łatwość integracji z innymi bibliotekami (NumPy, Matplotlib)</p>
                        <p>bogata dokumentacja i wsparcie społeczności</p>
                    </section>
                </section>

                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Ograniczenia Pandas</h3>
                    </section>
                    <section data-auto-animate>
                        <h3>Ograniczenia Pandas</h3>
                        <p>wydajność pracy z bardzo dużymi zbiorami danych (lepiej korzystać z PySpark lub Dask)</p>
                    </section>
                    <section data-auto-animate>
                        <h3>Ograniczenia Pandas</h3>
                        <p>wydajność pracy z bardzo dużymi zbiorami danych (lepiej korzystać z PySpark lub Dask)</p>
                        <p>wyższy próg wejścia dla początkujących</p>
                    </section>
                </section>

                <section data-auto-animate>
                    <h3>Pandas w praktyce</h3>
                </section>

                <section data-auto-animate>
                    <h3>Import Biblioteki Pandas</h3>
                    <pre><code className="font-mono" data-trim data-line-numbers="1">
                            {`
                            import pandas as pd
                            `}
                    </code></pre>
                </section>

                <section data-auto-animate>
                    <h3>Wczytywanie danych</h3>
                    <pre><code className="font-mono" data-trim data-line-numbers="1">
                            {`
                            df = pd.read_csv('data.csv', delimiter=',')
                            `}
                    </code></pre>
                </section>
                
                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Podgląd danych, 5 pierwszych wierszy</h3>
                        <pre><code className="font-mono" data-trim data-line-numbers="1">
                                {`
                                df.head()
                                `}
                        </code></pre>
                    </section>

                    <section data-auto-animate>
                        <Image
                            src="/2/screens/1.png"
                            width="1500"
                            height="1500"
                            alt="Pandas1"
                            className='r-fit-text'
                                />
                    </section>
                </section>
                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Podgląd danych, 5 ostatnich wierszy</h3>
                        <pre><code className="font-mono" data-trim data-line-numbers="1">
                                {`
                                df.tail()
                                `}
                        </code></pre>
                    </section>
                    <section data-auto-animate>
                            <Image
                                src="/2/screens/2.png"
                                width="1500"
                                height="1500"
                                alt="Pandas1"
                                className='r-fit-text'
                                    />
                    </section>
                </section>
                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Podstawowe informacje o danych</h3>
                        <pre><code className="font-mono" data-trim data-line-numbers="1">
                                {`
                                df.info()
                                `}
                        </code></pre>
                    </section>
                    <section data-auto-animate>
                            <Image
                                src="/2/screens/3.png"
                                width="600"
                                height="600"
                                alt="Pandas1"
                                className='r-fit-text'
                                    />
                    </section>
                </section>

                <section data-auto-animate>
                    <h3>Liczba wierszy</h3>
                    <pre><code className="font-mono" data-trim data-line-numbers="1">
                            {`
                            print(f"Liczba wierszy: { df.shape[0] }")
                            `}
                    </code></pre>
                    <p>Liczba wierszy wynosi: 325</p>
                </section>

                <section data-auto-animate>
                    <h3>Liczba kolumn</h3>
                    <pre><code className="font-mono" data-trim data-line-numbers="1">
                            {`
                            print(f"Liczba kolumn: { df.shape[1] }")
                            `}
                    </code></pre>
                    <p>Liczba wierszy wynosi: 9</p>
                </section>

                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Opis statystyczny danych liczbowych</h3>
                        <pre><code className="font-mono" data-trim data-line-numbers="1">
                                {`
                                df.describe()
                                `}
                        </code></pre>
                    </section>
                    <section data-auto-animate>
                            <Image
                                src="/2/screens/4.png"
                                width="600"
                                height="600"
                                alt="Pandas1"
                                className='r-fit-text'
                                    />
                    </section>
                </section>
                
                <section data-auto-animate>
                    <h3>Sprawdzanie unikalnych wartości w kolumnie</h3>
                    <pre><code className="font-mono" data-trim data-line-numbers="1">
                            {`
                            print(df['TIME_PERIOD'].unique())
                            `}
                    </code></pre>
                    <p>[2013 2014 2015 2016 2017 2018 2019 2020 2021 2022]</p>
                </section>
                
                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Filtrowanie na podstawie kategorii</h3>
                        <pre><code className="font-mono" data-trim data-line-numbers="1|2">
                                {`
                                category_filter = df[(df['TIME_PERIOD'] > 2020) & (df['TIME_PERIOD'] < 2022)]
                                category_filter.head()
                                `}
                        </code></pre>
                    </section>
                    <section data-auto-animate>
                    <Image
                                src="/2/screens/5.png"
                                width="900"
                                height="900"
                                alt="Pandas1"
                                className='r-fit-text'
                                    />
                    </section>
                </section>
                
                <section data-auto-animate> 
                    <section data-auto-animate>
                        <h3>Sortowanie danych</h3>
                        <pre><code className="font-mono" data-trim data-line-numbers="1">
                                {`
                                df.sort_values(by='TIME_PERIOD', ascending=True, inplace=True)

                                df.head()
                                `}
                        </code></pre>
                    </section>
                    <section data-auto-animate>
                        <Image
                                src="/2/screens/6.png"
                                width="900"
                                height="900"
                                alt="Pandas1"
                                className='r-fit-text'
                                    />
                    </section>
                </section>

                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Sprawdzanie brakujących wartości w poszczególnych kolumnach</h3>
                        <pre><code className="font-mono" data-trim data-line-numbers="1">
                                {`
                                print(df.isnull().sum())
                                `}
                        </code></pre>
                    </section>
                    <section data-auto-animate>
                    <Image
                                src="/2/screens/8.png"
                                width="600"
                                height="600"
                                alt="Pandas1"
                                className='r-fit-text'
                                    />
                    </section>
                </section>

                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Skopiowanie DataFrame&apos;a i dodanie nowych kolumn</h3>
                        <pre><code className="font-mono" data-trim data-line-numbers="1">
                                {`
                                df1 = df.copy()
                                df1['nowa_kolumna'] = 1
                                df1['nowa_kolumna_2'] = 4
                                df1['suma'] = df1['nowa_kolumna'] + df1['nowa_kolumna_2']
                                df1.head()
                                `}
                        </code></pre>
                    </section>
                    <section data-auto-animate>
                    <Image
                                src="/2/screens/9.png"
                                width="1100"
                                height="1100"
                                alt="Pandas1"
                                className='r-fit-text'
                                    />
                    </section>
                </section>

                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Zmiana nazwy kolumny</h3>
                        <pre><code className="font-mono" data-trim data-line-numbers="1">
                                {`
                                df1.rename(columns={'nowa_kolumna': 'zmieniona_nazwa', 'nowa_kolumna_2':'zmieniona_nazwa_2'}, inplace=True)
                                df1.head()
                                `}
                        </code></pre>
                    </section>
                    <section data-auto-animate>
                    <Image
                                src="/2/screens/10.png"
                                width="1100"
                                height="1100"
                                alt="Pandas1"
                                className='r-fit-text'
                                    />
                    </section>
                </section>

                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Usuwanie kolumny</h3>
                        <pre><code className="font-mono" data-trim data-line-numbers="1">
                                {`
                                df1.drop(columns=['zmieniona_nazwa', 'zmieniona_nazwa_2', 'suma', 'OBS_FLAG'], inplace=True)

                                df1.head()
                                `}
                        </code></pre>
                    </section>
                    <section data-auto-animate>
                    <Image
                                src="/2/screens/11.png"
                                width="900"
                                height="900"
                                alt="Pandas1"
                                className='r-fit-text'
                                    />
                    </section>
                </section>

                <section data-auto-animate>
                        <h3>Usuwanie DataFrame&apos;a</h3>
                        <pre><code className="font-mono" data-trim data-line-numbers="1">
                                {`
                                del df1 
                                `}
                        </code></pre>
                </section>

                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Grupowanie danych</h3>
                        <pre><code className="font-mono" data-trim data-line-numbers="1">
                                {`
                                grouped = df.groupby('geo')['OBS_VALUE'].sum()
                                print(grouped)
                                `}
                        </code></pre>
                    </section>
                    <section data-auto-animate>
                    <Image
                                src="/2/screens/12.png"
                                width="600"
                                height="600"
                                alt="Pandas1"
                                className='r-fit-text'
                                    />
                    </section>
                </section>

                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Grupowanie danych z agregacją</h3>
                        <pre><code className="font-mono" data-trim data-line-numbers="1">
                                {`
                                grouped = df.groupby('geo').agg({'OBS_VALUE': ['sum', 'mean', 'count']})
                                print(grouped)
                                `}
                        </code></pre>
                    </section>
                    <section data-auto-animate>
                    <Image
                                src="/2/screens/13.png"
                                width="600"
                                height="600"
                                alt="Pandas1"
                                className='r-fit-text'
                                    />
                    </section>
                </section>
                
                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Konwersja kolumny na format daty</h3>
                        <pre><code className="font-mono" data-trim data-line-numbers="1">
                                {`
                                df['LAST UPDATE'] = pd.to_datetime(df['LAST UPDATE'])
                                df.head()
                                `}
                        </code></pre>
                    </section>
                    <section data-auto-animate>
                    <Image
                                src="/2/screens/14.png"
                                width="900"
                                height="900"
                                alt="Pandas1"
                                className='r-fit-text'
                                    />
                    </section>
                </section>

                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Wyodrębnienie roku i miesiąca z daty</h3>
                        <pre><code className="font-mono" data-trim data-line-numbers="1">
                                {`
                                df['YEAR'] = df['LAST UPDATE'].dt.year
                                df['MONTH'] = df['LAST UPDATE'].dt.month
                                df.head()
                                `}
                        </code></pre>
                    </section>
                    <section data-auto-animate>
                    <Image
                                src="/2/screens/15.png"
                                width="900"
                                height="900"
                                alt="Pandas1"
                                className='r-fit-text'
                                    />
                    </section>
                </section>
                

                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Wykresy z Pandas</h3>
                        <pre><code className="font-mono" data-trim data-line-numbers="1">
                                {`
                                df['OBS_VALUE'].plot(kind='hist')
                                `}
                        </code></pre>
                    </section>
                    <section data-auto-animate>
                    <Image
                                src="/2/screens/16.png"
                                width="900"
                                height="900"
                                alt="Pandas1"
                                className='r-fit-text'
                                    />
                    </section>
                </section>

                <section data-auto-animate>
                        <h3>Zaawansowana modyfikacja wartości w kolumnie</h3>
                        <pre><code className="font-mono" data-trim data-line-numbers="1">
                                {`
                                df['OBS_VALUE x2'] = df['OBS_VALUE'].apply(lambda x: x * 2)
                                `}
                        </code></pre>
                </section>

                <section data-auto-animate>
                        <h3>Tworzenie małych kategorii na podstawie wartości w kolumnie</h3>
                        <pre><code className="font-mono" data-trim>
                                {`
                                df['DcM'] = df['OBS_VALUE'].apply(lambda x: 'dużo' 
                                if x > 8000 else 'mało')
                                `}
                        </code></pre>
                </section>

                
                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Sprawdzanie rankingu w kolumnie</h3>
                        <pre><code className="font-mono" data-trim>
                                {`
                                df['RANK'] = df.groupby(df['TIME_PERIOD'])['OBS_VALUE x2'].rank(ascending=False)
                                filtered_df = df[df['geo'] == 'Poland'][['RANK', 'TIME_PERIOD', 'geo', 'OBS_VALUE x2']]
                                print(filtered_df)
                                `}
                        </code></pre>
                    </section>
                    <section data-auto-animate>
                    <Image
                                src="/2/screens/17.png"
                                width="900"
                                height="900"
                                alt="Pandas1"
                                className='r-fit-text'
                                    />
                    </section>
                </section>

                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Sprawdzanie korelacji pomiędzy kolumnami</h3>
                        <pre><code className="font-mono" data-trim data-line-numbers="1">
                                {`
                                print(df[['OBS_VALUE', 'RANK']].corr())
                                `}
                        </code></pre>
                    </section>
                    <section data-auto-animate>
                    <Image
                                src="/2/screens/18.png"
                                width="900"
                                height="900"
                                alt="Pandas1"
                                className='r-fit-text'
                                    />
                    </section>
                </section>

                
                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Tworzenie tabeli przestawnej</h3>
                        <pre><code className="font-mono" data-trim>
                                {`
                                pivot_table = df.pivot_table(
                                    index='TIME_PERIOD',  
                                    columns='geo',        
                                    values='OBS_VALUE',    
                                    aggfunc='sum',         
                                    fill_value=0          
                                )

                                print(pivot_table)
                                `}
                        </code></pre>
                    </section>
                    <section data-auto-animate>
                    <Image
                                src="/2/screens/19.png"
                                width="900"
                                height="900"
                                alt="Pandas1"
                                className='r-fit-text'
                                    />
                    </section>
                </section>

                <section data-auto-animate>
                    <section data-auto-animate>
                        <h3>Meltowanie danych, zachowując kolumny geo i TIME_PERIOD</h3>
                        <pre><code className="font-mono" data-trim>
                                {`
                                df_melted = df.melt(id_vars=['geo', 'TIME_PERIOD'], 
                                                    value_vars=['OBS_VALUE', 'OBS_FLAG'], 
                                                    var_name='Variable', 
                                                    value_name='Value')

                                print(df_melted.head())
                                `}
                        </code></pre>
                    </section>
                    <section data-auto-animate>
                    <Image
                                src="/2/screens/20.png"
                                width="900"
                                height="900"
                                alt="Pandas1"
                                className='r-fit-text'
                                    />
                    </section>
                </section>

                <section data-auto-animate>
                        <h3>Eksport do CSV</h3>
                        <pre><code className="font-mono" data-trim>
                                {`
                                df.to_csv('exported_file.csv', sep=';', index=False)
                                `}
                        </code></pre>
                </section>

                <section data-auto-animate>
                        <h1>Dziękujemy za uwagę!!!</h1>
                </section>
            </div>
        </div>
    );
};

export default RevealPresentationClient2;
