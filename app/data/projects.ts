export const projects = [
  {
    id: 1,
    title: "Inventory Optimizer",
    description:
      "Built an end-to-end inventory optimization tool in Go combining lightweight statistical demand forecasting (SMA, SES) with a Monte Carlo simulation engine and classical inventory models (EOQ, reorder points, safety stock). \
      Processes CSV inputs, quantifies stockout risk and total cost under uncertainty, and produces actionable reorder recommendations with downloadable CSV/PDF reports. Includes optional PostgreSQL-backed persistence and JWT-based auth for saved reports.",
    image:
      "/images/inventory-optimizer/inventory_optimizer.png",
    tags: ["Go", "PostgreSQL", "Monte Carlo", "CSV", "HTML Templates"],
    year: "2026",
    category: "Optimization",
    content: "Inventory Optimizer is a production-ready Go application that converts historical sales and SKU parameter data into robust reorder recommendations and cost/service-level tradeoffs. \
    Forecasting uses Simple Moving Average and Single Exponential Smoothing with linear trend detection and coefficient-of-variation variability classification to handle sparse, noisy series (20–104 weeks). \
    A parallelized Monte Carlo simulation engine models demand uncertainty and lead times to estimate stockout probability, average inventory, and holding/ordering costs. Inventory logic implements EOQ and reorder-point checks; reports can be saved to PostgreSQL and exported as CSV or PDF. \
    The web UI is server-rendered using html/template with embedded static assets for a lightweight frontend. The codebase emphasizes correctness (unit tests), configurability of simulation parameters, and fast concurrent execution with Go routines.",
    additionalMedia: [
      "/images/inventory-optimizer/photo2.png",
      "/images/inventory-optimizer/photo3.png",
      "/images/inventory-optimizer/photo4.png",
    ],
    code: "https://github.com/nobleenia/inventory-optimizer.git",
    demo: "",
  }
]