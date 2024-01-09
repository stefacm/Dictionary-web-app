import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <Link href="/">
          <Image src="/images/logo.svg" alt="Logo" width={32} height={36.5} />
        </Link>
        {/* TO-DO: hide label with styles */}
        <label htmlFor="typography">Choose a typography:</label>
        <select name="typography" id="typography">
          <option value="Sans Serif" selected>
            Sans Serif
          </option>
          <option value="Serif">Serif</option>
          <option value="Mono">Mono</option>
        </select>
      </header>
      <form id="search-form">
        {/* TO-DO: hide label with styles */}
        <label htmlFor="search-input">Search for any word...</label>
        <input
          type="text"
          id="search-input"
          name="search-input"
          placeholder="Search for any word..."
        />
        <button type="submit" id="search-button">
          <Image
            src="/images/icon-search.svg"
            alt="Icon search"
            width={15.5}
            height={15.5}
          />
        </button>
      </form>
      <div>
        <h1>Keyboard</h1>
        <span>/ˈkiːbɔːd/</span>
        <section>
          <h2>noun</h2>
          <h3>Meaning</h3>
          <ul>
            <li>
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
            <li>
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </li>
            <li>
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard device.
            </li>
          </ul>
          <span>Synonyms</span>
          <p>electronic keyboard</p>
        </section>
        <section>
          <h2>verb</h2>
          <h3>Meaning</h3>
          <ul>
            <li>To type on a computer keyboard.</li>
          </ul>
          <p>“Keyboarding is the part of this job I hate the most.”</p>
        </section>
        <section>
          <span>Source</span>
          <Link
            href="https://en.wiktionary.org/wiki/keyboard"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            https://en.wiktionary.org/wiki/keyboard
            <Image
              src="/images/icon-new-window.svg"
              alt="Icon to open a new window"
              width={12}
              height={12}
            />
          </Link>
        </section>
      </div>
    </main>
  );
}
