// Tweaks panel for WASIMIL Pitch Deck v2 — light/dark mode + chapter style

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "mood": "light",
  "accentSlide": "cyan-sky"
}/*EDITMODE-END*/;

// Chapter / accent slides — index of slides to swap mood on
const FOREST_SLIDES = [3, 6, 14]; // Insight(04), Agent layer(07), Vision(15)

function applyMood(mood) {
  const stage = document.querySelector('deck-stage');
  if (!stage) return;
  const sections = stage.querySelectorAll('section');

  if (mood === 'dark') {
    // Make most slides dark
    sections.forEach((sec, i) => {
      sec.classList.remove('bg-sage-white', 'bg-sage');
      if (!FOREST_SLIDES.includes(i)) {
        sec.classList.add('bg-forest');
        sec.querySelectorAll('.slide-chrome').forEach(c => c.classList.add('on-dark'));
        sec.querySelectorAll('.slide-footer').forEach(f => f.classList.add('on-dark'));
      }
    });
  } else {
    // Restore light
    sections.forEach((sec, i) => {
      if (!FOREST_SLIDES.includes(i)) {
        sec.classList.remove('bg-forest');
        sec.querySelectorAll('.slide-chrome').forEach(c => c.classList.remove('on-dark'));
        sec.querySelectorAll('.slide-footer').forEach(f => f.classList.remove('on-dark'));
      }
    });
  }
}

function applyAccent(accent) {
  const root = document.documentElement;
  if (accent === 'cyan-sky') {
    root.style.setProperty('--brand-orange', '#00c4cc');
    root.style.setProperty('--brand-orange-deep', '#008c92');
    root.style.setProperty('--brand-yellow-pale', '#d8e8ff');
  } else if (accent === 'royal-violet') {
    root.style.setProperty('--brand-orange', '#7d2ae8');
    root.style.setProperty('--brand-orange-deep', '#5a1bb0');
    root.style.setProperty('--brand-yellow-pale', '#e6dcff');
  } else if (accent === 'azure-coral') {
    root.style.setProperty('--brand-orange', '#1d8eff');
    root.style.setProperty('--brand-orange-deep', '#0b66c4');
    root.style.setProperty('--brand-yellow-pale', '#ffe1d6');
  }
}

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    applyMood(tweaks.mood);
  }, [tweaks.mood]);

  React.useEffect(() => {
    applyAccent(tweaks.accentSlide);
  }, [tweaks.accentSlide]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="ムード">
        <TweakRadio
          value={tweaks.mood}
          onChange={v => setTweak('mood', v)}
          options={[
            { value: 'light', label: '明るい (Canva)' },
            { value: 'dark', label: 'ダーク (Forest)' },
          ]}
        />
        <div style={{ fontSize: 12, color: '#737d64', marginTop: 8, lineHeight: 1.5 }}>
          全体トーンを切替。ダークは深緑ベース、明るいはサゲホワイト中心。
        </div>
      </TweakSection>

      <TweakSection title="アクセントカラー">
        <TweakRadio
          value={tweaks.accentSlide}
          onChange={v => setTweak('accentSlide', v)}
          options={[
            { value: 'cyan-sky', label: 'Cyan × Sky' },
            { value: 'royal-violet', label: 'Royal violet' },
            { value: 'azure-coral', label: 'Azure × Coral' },
          ]}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.body.appendChild(document.createElement('div'))).render(<App />);
