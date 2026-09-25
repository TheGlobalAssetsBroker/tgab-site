// Topic-specific copy and metadata are shared by the pages and the static HTML build.
export const insightsMeta = {
  title: "Trading Guides: Stocks, ETFs & Options — TGAB Insights",
  description: "Understand US stocks, ETFs, order types and listed options with practical TGAB trading guides, worked examples and links to investor education sources.",
};

export const articles = [
  {
    slug: "stocks-vs-etfs",
    title: "Stocks vs ETFs: Differences, Costs & Risks — TGAB",
    heading: "Stocks vs ETFs:",
    accent: "what are you buying?",
    description: "Compare stocks vs ETFs: ownership, diversification, fees and trading risks. Use worked examples and a research checklist to understand US-listed investments.",
    category: "Stocks & ETFs",
    keywords: ["stocks vs ETFs", "difference between stocks and ETFs", "ETF fees", "US-listed ETFs"],
    summary: "One company or a portfolio? Understand the exposure, costs and research behind two ways to access US markets.",
    date: "2026-09-25",
    takeaway: "A stock gives you ownership in one company. An exchange-traded fund (ETF) gives you an interest in a fund's portfolio. Both trade on exchanges, but the holdings and structure determine the risks you take.",
    sections: [
      {
        id: "ownership",
        title: "The difference starts with ownership",
        paragraphs: [
          "Buying a company's common stock makes you a shareholder in that business. Your investment is exposed to its earnings, finances and market valuation. Common shares generally carry voting rights, and some companies pay dividends; neither dividends nor a rise in the share price is guaranteed.",
          "An ETF pools investors' money according to a stated investment mandate. A share in an equity ETF provides exposure to the stocks held by that fund. Some ETFs track an index, while others use active management. The fund name alone does not tell you how it invests: read its objective and holdings before assuming it covers the whole market.",
        ],
        table: {
          caption: "Individual company stock compared with an equity ETF",
          headings: ["What to compare", "Company stock", "Equity ETF"],
          rows: [
            ["Exposure", "One business", "The fund's holdings and strategy"],
            ["Research", "Company filings, earnings and valuation", "Mandate, holdings, concentration and fund documents"],
            ["Ongoing fund fee", "No fund expense ratio for direct ownership", "Operating expenses paid from fund assets"],
            ["Trading", "Market price, spread and broker charges", "Market price, spread, broker charges and potential NAV premium or discount"],
          ],
        },
        sources: [0, 1],
      },
      {
        id: "diversification",
        title: "Diversification depends on what is inside",
        paragraphs: [
          "A broad equity ETF can spread exposure across many companies. A sector ETF may hold multiple businesses that are all sensitive to the same industry conditions. Multiple tickers in your account can also overlap: owning a technology fund and its largest individual holdings may increase your exposure to those companies.",
          "For a simplified illustration, suppose one company falls 20% while everything else stays flat. A $5,000 position in that stock loses $1,000. If the company represents 4% of a $5,000 fund position, its direct contribution to the fund's loss is about $40: $5,000 × 4% × 20%. This ignores trading, fees and changes in other holdings. It demonstrates position weight, not a forecast of ETF performance.",
          "Check the top holdings, sector weights and investment method. A fund can still lose substantially when the wider market falls. Leveraged, inverse and single-stock products have different exposures and should not be treated as substitutes for a conventional diversified equity fund.",
        ],
        sources: [2],
      },
      {
        id: "costs",
        title: "Compare the total cost, not just commission",
        paragraphs: [
          "Both stocks and ETFs can involve broker commissions and a bid-ask spread. An ETF also has operating expenses, usually expressed as an annual expense ratio. These expenses reduce fund assets; they are not usually a separate annual invoice to each investor.",
          "For example, a hypothetical 0.20% annual expense ratio represents roughly $20 a year on a constant $10,000 investment. It is only an illustration: actual costs depend on the value and duration of the holding. Separately, buying 100 shares at a $50.05 ask and immediately selling at a $50.00 bid would lose $5 before commissions, assuming the quotes stay unchanged and sufficient shares are available.",
          "If you fund an account in a different currency, check conversion and transfer charges as well. A low headline commission does not answer those questions. Compare the fund's documents with the broker's fee schedule, including minimum commissions and any account or service fees.",
        ],
        sources: [3, 4],
        links: [{ label: "Review TGAB's indicative pricing and fee disclosures", href: "/pricing" }],
      },
      {
        id: "execution",
        title: "An ETF's market price is not its NAV",
        paragraphs: [
          "Net asset value (NAV) measures a fund's assets minus liabilities per share. The price available on an exchange can sit above NAV, called a premium, or below it, called a discount. Check the issuer's premium and discount history and spread information alongside its holdings.",
          "For either a stock or an ETF, look at the current bid and ask rather than relying only on the last traded price. Decide whether you need a price boundary on the order. A limit order sets that boundary but might never fill; a market order does not fix the execution price.",
        ],
        sources: [1],
        links: [{ label: "See market vs limit orders with worked examples", href: "/insights/market-vs-limit-orders" }],
      },
      {
        id: "checklist",
        title: "A research checklist before you decide",
        paragraphs: ["Write down what the position is meant to do before comparing tickers. This gives you a consistent basis for judging both a company and a fund."],
        list: [
          "Define the exposure: one business, a sector or a wider market. Check how it overlaps with what you already hold.",
          "Read company filings for a stock; read the prospectus, holdings and fee disclosures for a fund.",
          "Compare costs for your intended trade size and holding period, including spreads and currency conversion where relevant.",
          "Consider how a price decline would affect money you might need soon. Neither product guarantees capital preservation.",
          "Confirm instrument availability and account eligibility with your broker before planning a trade.",
        ],
        links: [{ label: "Explore TGAB's planned US equities and ETF coverage", href: "/markets" }],
      },
    ],
    faqs: [
      { question: "Are ETFs always safer than individual stocks?", answer: "No. A broad fund can reduce exposure to a single company, but its holdings can still fall together. Concentrated or complex products can behave very differently. Review the actual holdings and strategy, not just the ETF label." },
      { question: "Can you buy and sell an ETF like a stock?", answer: "ETF shares trade on exchanges during available trading sessions. You submit an order through a broker, subject to its supported instruments, order types and account permissions." },
      { question: "Do stocks and ETFs both pay dividends?", answer: "Some companies pay dividends and some funds distribute income from their holdings. The amount and timing depend on the company or fund, and distributions are not guaranteed." },
    ],
    sources: [
      { label: "SEC Investor.gov: Stocks", url: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks" },
      { label: "SEC Investor.gov: Exchange-Traded Funds", url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-24" },
      { label: "FINRA: Exchange-Traded Funds and Products", url: "https://www.finra.org/investors/investing/investment-products/exchange-traded-funds-and-products" },
      { label: "SEC Investor.gov: Mutual Fund and ETF Fees and Expenses", url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/mutual-fund-and-etf-fees-and-expenses-investor-bulletin" },
      { label: "SEC Investor.gov: How Fees and Expenses Affect Your Investment Portfolio", url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/updated" },
    ],
  },
  {
    slug: "market-vs-limit-orders",
    title: "Market vs Limit Orders: Examples & Stop Orders — TGAB",
    heading: "Market vs limit orders:",
    accent: "price or execution?",
    description: "Learn market vs limit orders with stock-trading examples. Compare stop and stop-limit orders, partial fills, time in force and extended-hours risks.",
    category: "Trading essentials",
    keywords: ["market vs limit orders", "stop vs stop-limit orders", "stock order types", "limit order example"],
    summary: "Understand what an order controls, what it cannot guarantee, and how stops and time limits change the outcome.",
    date: "2026-09-25",
    takeaway: "A market order seeks execution at available prices. A limit order sets your worst acceptable execution price but may not fill. A stop is a trigger, not a guarantee that you can exit at a particular price.",
    sections: [
      {
        id: "comparison",
        title: "What market and limit orders actually control",
        paragraphs: [
          "A market order instructs your broker to buy or sell at prices available when the order reaches the market. The last price you saw on a chart may be different. A buy generally executes against available offers; a sell generally executes against available bids. Fast price moves and the amount available at each price affect the result.",
          "A buy limit sets the highest price you will pay per share; a sell limit sets the lowest price you will accept. Execution can occur at that limit or a better price, but it depends on available counterparties and order priority. Setting a price does not reserve shares for you.",
        ],
        table: {
          caption: "Four common stock order types and their trade-offs",
          headings: ["Order", "Instruction", "Main limitation"],
          rows: [
            ["Market", "Trade at available prices", "Execution price is not fixed"],
            ["Limit", "Trade at the limit price or better", "May fill partially or not at all"],
            ["Stop", "Activate a market order at a trigger", "Final price can differ from the stop"],
            ["Stop-limit", "Activate a limit order at a trigger", "May remain unfilled after triggering"],
          ],
        },
        sources: [0, 1],
      },
      {
        id: "worked-example",
        title: "A market vs limit order example",
        paragraphs: [
          "Imagine a fictional stock quoted at $49.98 bid and $50.02 ask. You want 100 shares, and the displayed offer contains only 60 shares. If a market buy fills those 60 at $50.02 and the remaining 40 at $50.08, you pay $5,004.40 before fees. Your average execution price is $50.044, not the original $50.02 ask.",
          "Now consider a buy limit for 100 shares at $50.02 using that same order book. It might fill 60 shares at $50.02, costing $3,001.20 before fees, with 40 shares left open. If no further shares become available at $50.02 or below during the order's life, the remainder will not execute.",
          "These are simplified examples, not live quotes or execution promises. They show the decision clearly: is a higher price acceptable to obtain the full position, or is leaving some or all of the order unfilled acceptable to keep your price boundary?",
        ],
      },
      {
        id: "stop-orders",
        title: "Stop vs stop-limit: a trigger is not a price guarantee",
        paragraphs: [
          "Suppose you own a stock trading around $60 and enter a sell stop at $55. Once the relevant trigger is reached, the order becomes a market order. If the stock gaps down and the next available trading prices are around $50, the eventual sale can be well below $55. The label 'stop-loss' does not establish a maximum loss.",
          "A sell stop-limit could instead use a $55 stop and a $54 limit. After activation, it can sell only at $54 or higher. If buyers are offering $50 and the market does not recover to the limit, it may not sell at all. You still hold the shares and remain exposed to further declines.",
          "Temporary price swings can trigger stops even if the stock later recovers. Ask your broker which event activates the order, which sessions are eligible and how it handles volatile conditions. Those details matter just as much as the number entered in the stop field.",
        ],
        sources: [2],
      },
      {
        id: "time-in-force",
        title: "Time in force and partial fills",
        paragraphs: [
          "The order type and its duration are separate choices. A day order normally expires at the end of its applicable trading day if unfilled. A good-til-canceled (GTC) order can stay open for longer, subject to the broker's expiration policy. GTC should not be interpreted as an order that lasts forever.",
          "An immediate-or-cancel instruction permits an immediate partial execution and cancels the remainder. Fill-or-kill requires the entire specified quantity immediately or cancels the order. Brokers do not necessarily offer every combination of order type and duration.",
          "Review the order status after submission: open, partially filled, filled, canceled and rejected describe different outcomes. If you request a cancellation, confirm it succeeded before replacing the order; a request may arrive after an execution has already happened.",
        ],
        sources: [3],
      },
      {
        id: "sessions",
        title: "Trading sessions change the conditions",
        paragraphs: [
          "Extended-hours sessions can have fewer participants, wider spreads and more volatile prices than regular trading. Available order types and eligible instruments may also be restricted. An order eligible for one session should not be assumed to carry into another.",
          "Before submitting, check the symbol, buy or sell direction, quantity, price fields, session and time in force. For a limit order, estimate the maximum purchase amount using quantity × limit price, then allow for fees. For a market order, that calculation using the displayed quote is only an estimate.",
          "TGAB's market coverage page describes planned access. Confirm actual platform capabilities and session permissions when your account becomes available rather than treating this guide as a promise that every instruction will be supported.",
        ],
        sources: [4],
        links: [
          { label: "Explore TGAB's planned trading platform", href: "/platforms" },
          { label: "Review the indicative commission schedule", href: "/pricing" },
        ],
      },
    ],
    faqs: [
      { question: "Is a limit order always better than a market order?", answer: "No single order type fits every objective. A limit controls price but can leave you without a completed trade. A market order prioritizes execution at available prices and leaves the final price uncertain." },
      { question: "Why did my limit order not fill when the stock reached my price?", answer: "A displayed or last traded price does not guarantee enough shares were available to your order. Other orders may have priority, or only part of the requested quantity may be available." },
      { question: "Can a stop-loss order sell below the stop price?", answer: "Yes. A conventional stop becomes a market order once triggered. A gap or rapid price movement can produce an execution below the stop price on a sell order." },
    ],
    sources: [
      { label: "SEC Investor.gov: Types of Orders", url: "https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/types-orders" },
      { label: "FINRA: Order Types", url: "https://www.finra.org/investors/investing/investment-products/stocks/order-types" },
      { label: "FINRA: Stop Orders During Volatile Market Conditions", url: "https://www.finra.org/rules-guidance/notices/16-19" },
      { label: "FINRA: Time Parameters and Qualifiers on Stock Orders", url: "https://www.finra.org/investors/insights/time-parameters-qualifiers-stock-orders" },
      { label: "FINRA: Extended-Hours Trading Risks", url: "https://www.finra.org/investors/insights/extended-hours-trading" },
    ],
  },
  {
    slug: "options-trading-basics",
    title: "Options Trading Basics: Calls, Puts & Risks — TGAB",
    heading: "Options trading basics:",
    accent: "beyond the premium.",
    description: "Understand calls and puts, premiums, strike prices, expiration and assignment. Explore worked options examples and the risks to check before trading.",
    category: "Listed options",
    keywords: ["options trading basics", "calls vs puts", "options premium", "options exercise and assignment"],
    summary: "Read an options contract, work through a call and a put, and understand the obligations that can outlast the trade.",
    date: "2026-09-25",
    takeaway: "An option buyer pays for a contractual right; an option seller takes on an obligation. A small premium can represent a much larger underlying position. Understand the contract, possible loss and expiration process before placing an order.",
    sections: [
      {
        id: "calls-and-puts",
        title: "Calls vs puts: rights and obligations",
        paragraphs: [
          "A call gives its buyer the right to buy the underlying asset at the strike price under the contract's terms. A put gives its buyer the right to sell. The option's expiration limits how long that right exists. The buyer pays a premium to acquire it.",
          "For physically settled equity options, a seller assigned on a call must deliver shares, while a seller assigned on a put must buy them. Receiving a premium does not remove that obligation. Options trading normally requires specific broker approval and is not suitable for every investor.",
        ],
        table: {
          caption: "Basic rights and obligations for physically settled equity options",
          headings: ["Position", "Contract role", "What to plan for"],
          rows: [
            ["Call buyer", "Right to buy shares at the strike", "Premium loss and funding an exercise"],
            ["Put buyer", "Right to sell shares at the strike", "Premium loss and delivery on exercise"],
            ["Call seller", "Obligation to deliver if assigned", "Delivery and potentially unlimited uncovered loss"],
            ["Put seller", "Obligation to buy if assigned", "Funding the purchase and a falling share price"],
          ],
        },
        sources: [0],
      },
      {
        id: "contract",
        title: "Read the full contract, not just the price",
        paragraphs: [
          "Check the underlying, call or put designation, strike, expiration, multiplier, exercise style and settlement method. A standard US equity option typically represents 100 shares, so a quoted premium of $2.40 normally costs $240 for one contract, before fees. Adjusted contracts can have different deliverables; verify the specifications.",
          "American-style options can be exercised before expiration. European-style options restrict exercise to the specified expiration exercise period. Equity and ETF options commonly involve share delivery, while many index options settle in cash. Do not apply an equity-option example to an index contract without checking its terms.",
          "Write the full commitment next to the premium. One physically settled $50-strike call covering 100 shares requires $5,000 to buy the shares if exercised, in addition to the premium already paid and any fees. The $240 entry cost is not the same as the cash needed to exercise.",
        ],
        sources: [1, 2],
      },
      {
        id: "examples",
        title: "Worked examples: a long call and a long put",
        paragraphs: [
          "Assume hypothetical standard contracts covering 100 shares, each bought for a $2 premium, with a $50 strike. Each costs $200 before fees. The following values illustrate the option payoff at expiration less that premium. They exclude commissions, taxes, exercise costs and any subsequent share-position gains or losses.",
        ],
        table: {
          caption: "Illustrative expiration profit or loss per contract, before fees",
          headings: ["Stock price at expiration", "Long $50 call", "Long $50 put"],
          rows: [
            ["$44", "−$200", "+$400"],
            ["$48", "−$200", "$0"],
            ["$50", "−$200", "−$200"],
            ["$52", "$0", "−$200"],
            ["$56", "+$400", "−$200"],
          ],
        },
        after: [
          "The call's expiration break-even is $52: the $50 strike plus the $2 premium. At $56, its intrinsic value is $600 and its profit after the $200 premium is $400. The put's break-even is $48: the $50 strike minus the $2 premium. At $44, it also has $600 of intrinsic value and $400 of profit after premium.",
          "These calculations do not predict what you could sell either option for before expiration. They also show why being right about direction is not enough: a stock at $51 leaves the call in the money but still $100 below the original premium cost at expiration, before fees.",
        ],
      },
      {
        id: "pricing",
        title: "Why a premium changes before expiration",
        paragraphs: [
          "An option's price includes intrinsic value, if any, and extrinsic or time value. Time remaining and expected volatility influence that extra value alongside the underlying price and other inputs. All else equal, the passage of time reduces an option's time value; a decline in implied volatility can also reduce the premium.",
          "That is why a call's market value can fall even after a modest rise in the stock. The gain from the price move can be outweighed by changes in time value or volatility. Comparing two options only by which has the cheaper premium ignores strike, duration and sensitivity to changing conditions.",
        ],
        sources: [3],
      },
      {
        id: "expiration",
        title: "Exercise, assignment and expiration need a plan",
        paragraphs: [
          "Selling an option you own to close a position is different from exercising it. Exercise uses the contractual right; assignment requires an option seller to fulfill the other side. An American-style short position can be assigned before expiration, not just on the final day.",
          "In-the-money equity options are generally subject to exercise-by-exception at expiration unless contrary instructions apply. Broker deadlines and account handling policies matter. Do not assume an option simply disappears because you did not send an instruction. Exercise can leave a share position with funding requirements and continuing market risk.",
          "Before opening a position, decide how you would handle closing it, exercise or assignment. Check the broker's deadlines, available funds, delivery requirements and potential actions if the account cannot support the resulting position.",
        ],
        sources: [2, 4],
      },
      {
        id: "risk-checklist",
        title: "A checklist before trading listed options",
        list: [
          "Read the current Characteristics and Risks of Standardized Options disclosure linked below, alongside your broker's agreements.",
          "Identify the maximum loss for the complete position. A purchased option can lose its entire premium; some sold options carry much greater risk, including unlimited loss on an uncovered call.",
          "Check the bid-ask spread, available size and order price. A last traded premium is not an executable quote.",
          "Calculate both the premium outlay and any potential share purchase or delivery obligation.",
          "Confirm account approval, supported strategies, commissions and exercise or assignment charges before proceeding.",
        ],
        paragraphs: ["TGAB lists US-listed options among its planned launch markets. Availability, permissions and final terms must be confirmed when onboarding opens. Learning the mechanics does not establish whether an options strategy suits your circumstances."],
        sources: [5],
        links: [
          { label: "Review TGAB's planned listed-options coverage", href: "/markets" },
          { label: "Read TGAB's risk disclosure", href: "/legal#risk" },
        ],
      },
    ],
    faqs: [
      { question: "Does one options contract always represent 100 shares?", answer: "No. That is typical for a standard equity option, but corporate actions can produce adjusted contracts. Index contracts also use different specifications. Confirm the multiplier and deliverable for the exact contract." },
      { question: "Can an option buyer lose more than the premium?", answer: "The purchased option itself can lose its full premium, plus transaction costs. Exercising it may create a stock position with additional funding needs and losses. The risk of that resulting position must be considered separately." },
      { question: "Is an in-the-money option automatically profitable?", answer: "No. In the money describes intrinsic value relative to the strike. Your profit also depends on the premium paid and costs, as the expiration examples above demonstrate." },
    ],
    sources: [
      { label: "FINRA: Options", url: "https://www.finra.org/investors/investing/investment-products/options" },
      { label: "OIC: Equity vs. Index Options", url: "https://www.optionseducation.org/advancedconcepts/equity-vs-index-options" },
      { label: "OIC: Exercising Options", url: "https://www.optionseducation.org/optionsoverview/exercising-options" },
      { label: "OIC: Options Pricing", url: "https://www.optionseducation.org/optionsoverview/options-pricing" },
      { label: "OIC: Options Assignment", url: "https://www.optionseducation.org/referencelibrary/faq/options-assignment" },
      { label: "OCC: Characteristics and Risks of Standardized Options", url: "https://www.theocc.com/company-information/documents-and-archives/options-disclosure-document" },
    ],
  },
];

export const articlePath = (article) => `/insights/${article.slug}`;
export const articleHeading = (article) => `${article.heading} ${article.accent}`;
export const articleReadTime = (article) => Math.ceil(JSON.stringify([article.takeaway, article.sections, article.faqs]).split(/\s+/).length / 200);
export const formatArticleDate = (date) => new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
