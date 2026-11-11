import { useMemo, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { estimateAddOnNames, estimateBaseNames, mailto, pricing, whatsappNumber } from "@/lib/noveltiq";

const addOnPricing = estimateAddOnNames.map((name) => {
  const item = pricing.find(([itemName]) => itemName === name);
  return { name, amount: item?.[2] ?? null };
});

const basePricing = estimateBaseNames.map((name) => {
  const item = pricing.find(([itemName]) => itemName === name);
  return { name, amount: item?.[2] ?? null };
});

export function EstimateBuilder() {
  const [base, setBase] = useState<string>(estimateBaseNames[1]);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [currency, setCurrency] = useState<"USD" | "NGN">("USD");

  const estimate = useMemo(() => {
    const baseItem = basePricing.find((item) => item.name === base);
    if (!baseItem || baseItem.amount === null) return null;
    const addOnAmounts = selectedAddOns.map((name) => addOnPricing.find((item) => item.name === name)?.amount ?? null);
    if (addOnAmounts.some((amount) => amount === null)) return null;
    return baseItem.amount + addOnAmounts.reduce<number>((sum, amount) => sum + (amount ?? 0), 0);
  }, [base, selectedAddOns]);

  const formatPrice = (amount: number) => currency === "USD"
    ? `$${amount.toLocaleString("en-US")}`
    : `₦${(amount * 1500).toLocaleString("en-NG")}`;

  const toggleAddOn = (name: string, checked: boolean) => {
    setSelectedAddOns((current) => checked ? [...current, name] : current.filter((item) => item !== name));
  };

  const message = `Hi Noveltiq, I'd like to discuss a project.\n\nProject type: ${base}\nAdditional needs: ${selectedAddOns.length ? selectedAddOns.join(", ") : "None selected"}\nIndicative starting estimate: ${estimate === null ? "Custom scope" : formatPrice(estimate)}\n\nI understand the final quote depends on the agreed scope.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return <div className="grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-start">
    <div className="space-y-10">
      <fieldset>
        <legend className="text-lg font-semibold text-foreground">What are you looking to build?</legend>
        <p className="mt-2 text-sm text-muted-foreground">Choose the closest starting point.</p>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {basePricing.map(({ name, amount }) => <label key={name} className={`flex cursor-pointer items-start gap-3 border p-4 transition-colors ${base === name ? "border-primary/60 bg-accent/50" : "border-border hover:border-primary/30"}`}>
            <input type="radio" name="project-base" value={name} checked={base === name} onChange={() => setBase(name)} className="mt-1 accent-primary" />
            <span className="min-w-0"><span className="block text-sm font-medium text-foreground">{name}</span><span className="mt-1 block font-mono text-xs text-muted-foreground">{amount === null ? "Custom scope" : `from ${formatPrice(currency === "USD" ? amount : amount * 1500)}`}</span></span>
          </label>)}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-lg font-semibold text-foreground">Anything else to include?</legend>
        <p className="mt-2 text-sm text-muted-foreground">Add what you already know you need.</p>
        <div className="mt-5 divide-y divide-border border-y border-border">
          {addOnPricing.map(({ name, amount }) => {
            const checked = selectedAddOns.includes(name);
            return <label key={name} className="flex cursor-pointer items-center gap-3 py-4">
              <Checkbox checked={checked} onCheckedChange={(value) => toggleAddOn(name, value === true)} aria-label={name} />
              <span className="flex flex-1 items-center justify-between gap-3 text-sm"><span className="text-foreground">{name}</span><span className="font-mono text-xs text-muted-foreground">{amount === null ? "Custom scope" : `from ${formatPrice(currency === "USD" ? amount : amount * 1500)}`}</span></span>
            </label>;
          })}
        </div>
      </fieldset>
    </div>

    <aside className="border-t border-border pt-6 lg:sticky lg:top-28 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
      <div className="flex items-center justify-between gap-4">
        <p className="eyebrow mb-0">Planning estimate</p>
        <div className="flex border border-border p-1" role="group" aria-label="Estimate currency">
          {(["USD", "NGN"] as const).map((value) => <Button key={value} type="button" size="sm" variant={currency === value ? "default" : "ghost"} aria-pressed={currency === value} onClick={() => setCurrency(value)} className="h-7 rounded-sm px-2.5 font-mono text-[10px]">{value}</Button>)}
        </div>
      </div>
      <p className="mt-5 text-4xl font-semibold text-foreground">{estimate === null ? "Custom scope" : `From ${formatPrice(estimate)}`}</p>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">A directional starting point based on the selected services. Final pricing depends on requirements, content, integrations and agreed scope.</p>
      <div className="mt-7 space-y-3 border-t border-border pt-5 text-sm">
        <p className="flex items-center gap-2 text-foreground"><Check className="size-4 text-primary" />{base}</p>
        {selectedAddOns.map((name) => <p key={name} className="flex items-center gap-2 text-muted-foreground"><Check className="size-4 text-primary" />{name}</p>)}
      </div>
      <Button asChild className="mt-8 h-12 w-full justify-between rounded-sm px-5">
        <a href={whatsappUrl} target="_blank" rel="noreferrer">Discuss this estimate <ArrowUpRight /></a>
      </Button>
      <a className="mt-4 block text-center text-sm text-muted-foreground hover:text-foreground" href={mailto("Project estimate", message)}>Email us instead ↗</a>
      <p className="mt-5 font-mono text-[10px] leading-5 text-muted-foreground">Planning guide only · Not a fixed quote</p>
    </aside>
  </div>;
}