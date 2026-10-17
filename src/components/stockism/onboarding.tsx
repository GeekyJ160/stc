import { useState } from "react";
import lockup from "@/assets/brand/lockup.jpg";
import { Mark, Wordmark } from "@/components/stockism/mark";
import { Choice, PrimaryButton } from "@/components/stockism/ui";
import {
  CATEGORIES,
  DEFAULT_PROFILE,
  parseCapital,
  type Category,
  type Channel,
  type Profile,
  type RiskMode,
} from "@/lib/stockism/model";
import { useStock } from "@/lib/stockism/store";

const RISKS: { id: RiskMode; title: string; detail: string }[] = [
  { id: "conservative", title: "Conservative", detail: "Higher probability. Skip high-volatility names." },
  { id: "balanced", title: "Balanced", detail: "Standard band. High-risk warnings stay visible, not featured." },
  { id: "aggressive", title: "Aggressive", detail: "Surface the full tape, including fast and fading names." },
];

const CHANNELS: { id: Channel; title: string; detail: string }[] = [
  { id: "push", title: "Push Notifications", detail: "On-device alerts while the system is open." },
  { id: "sms", title: "SMS", detail: "Saved as a preference. Delivery is simulated here." },
  { id: "email", title: "Email (optional)", detail: "Saved as a preference. Delivery is simulated here." },
];

export function Onboarding() {
  const finish = useStock((state) => state.finishOnboarding);
  const persist = useStock((state) => state.persist);
  const [step, setStep] = useState(0);
  const [capitalText, setCapitalText] = useState("5000");
  const [risk, setRisk] = useState<RiskMode>("balanced");
  const [categories, setCategories] = useState<Category[]>(DEFAULT_PROFILE.categories);
  const [channels, setChannels] = useState<Channel[]>(["push"]);
  const capital = parseCapital(capitalText);

  function toggleCategory(id: Category) {
    setCategories((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  function toggleChannel(id: Channel) {
    setChannels((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  function finishSetup() {
    if (capital == null || channels.length === 0 || categories.length === 0) return;
    const profile: Profile = {
      onboarded: true,
      capital,
      risk,
      categories,
      channels,
      frequency: "realtime",
      intel: true,
    };
    finish(profile);
    persist();
  }

  return (
    <main className="spotlight min-h-dvh text-fg">
      <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 py-6">
        <header className="flex items-center gap-3">
          <Mark size={32} />
          <Wordmark />
        </header>

        {step === 0 ? (
          <div className="flex flex-1 flex-col">
            <img
              src={lockup}
              alt="Stock-ism AI metallic monogram"
              className="feather mx-auto mt-6 w-full max-w-sm"
            />
            <div className="mt-auto pb-4">
              <h1 className="text-3xl font-semibold tracking-tight">Stock-ism AI</h1>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Market-Scanning Intelligence. Tactical Alerts. Zero Noise.
              </p>
              <PrimaryButton className="mt-6 w-full" onClick={() => setStep(1)}>
                Activate System
              </PrimaryButton>
            </div>
          </div>
        ) : (
          <div className="mt-8 flex flex-1 flex-col">
            <div className="mb-6 h-1 overflow-hidden rounded-full bg-line" aria-hidden="true">
              <div className="h-full bg-primary" style={{ width: `${(step / 4) * 100}%` }} />
            </div>
            {step === 1 ? <CapitalStep value={capitalText} valid={capital != null} onChange={setCapitalText} /> : null}
            {step === 2 ? <RiskStep risk={risk} onChange={setRisk} /> : null}
            {step === 3 ? (
              <CategoryStep categories={categories} onToggle={toggleCategory} />
            ) : null}
            {step === 4 ? <ChannelStep channels={channels} onToggle={toggleChannel} /> : null}
            <div className="mt-auto flex gap-3 pt-8 pb-2">
              <button
                type="button"
                className="h-12 flex-1 rounded-xl border border-line text-sm font-medium text-fg"
                onClick={() => setStep((current) => current - 1)}
              >
                Back
              </button>
              {step < 4 ? (
                <PrimaryButton
                  className="flex-1"
                  disabled={(step === 1 && capital == null) || (step === 3 && categories.length === 0)}
                  onClick={() => setStep((current) => current + 1)}
                >
                  {step === 2 ? "Set Profile" : step === 3 ? "Save Preferences" : "Continue"}
                </PrimaryButton>
              ) : (
                <PrimaryButton className="flex-1" disabled={channels.length === 0} onClick={finishSetup}>
                  Finish Setup
                </PrimaryButton>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

function CapitalStep({
  value,
  valid,
  onChange,
}: {
  value: string;
  valid: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Your Capital Range</h1>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Tell the system how much you typically deploy.
      </p>
      <label className="mt-6 block text-sm text-muted" htmlFor="capital">
        Enter amount or range
      </label>
      <input
        id="capital"
        inputMode="decimal"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="5000 or 5k-10k"
        className="mt-2 h-12 w-full rounded-xl border border-line bg-surface px-4 font-mono text-fg"
      />
      <p className="mt-2 text-sm text-faint">Used only to tailor alert sizing.</p>
      {!valid ? <p className="mt-2 text-sm text-risk">Enter a number, a shorthand like 25k, or a range.</p> : null}
      <div className="mt-4 flex flex-wrap gap-2">
        {["5000", "25000", "50000", "100000"].map((amount) => (
          <button
            key={amount}
            type="button"
            onClick={() => onChange(amount)}
            className={`h-10 rounded-lg border px-3 font-mono text-xs ${
              value === amount ? "border-primary text-fg" : "border-line text-muted"
            }`}
          >
            ${Number(amount).toLocaleString("en-US")}
          </button>
        ))}
      </div>
    </div>
  );
}

function RiskStep({ risk, onChange }: { risk: RiskMode; onChange: (risk: RiskMode) => void }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Your Risk Mode</h1>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Choose how aggressively the system should surface opportunities.
      </p>
      <div className="mt-6 grid gap-3">
        {RISKS.map((item) => (
          <Choice
            key={item.id}
            selected={risk === item.id}
            title={item.title}
            detail={item.detail}
            onClick={() => onChange(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

function CategoryStep({
  categories,
  onToggle,
}: {
  categories: Category[];
  onToggle: (id: Category) => void;
}) {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Alert Categories</h1>
      <p className="mt-2 text-sm leading-relaxed text-muted">Choose what the system should monitor for you.</p>
      <div className="mt-6 grid gap-3">
        {CATEGORIES.map((item) => (
          <Choice
            key={item.id}
            selected={categories.includes(item.id)}
            title={item.label}
            onClick={() => onToggle(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

function ChannelStep({
  channels,
  onToggle,
}: {
  channels: Channel[];
  onToggle: (id: Channel) => void;
}) {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">How You Want Alerts</h1>
      <p className="mt-2 text-sm leading-relaxed text-muted">Select your delivery method.</p>
      <div className="mt-6 grid gap-3">
        {CHANNELS.map((item) => (
          <Choice
            key={item.id}
            selected={channels.includes(item.id)}
            title={item.title}
            detail={item.detail}
            onClick={() => onToggle(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
