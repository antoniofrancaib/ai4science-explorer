import { Problem } from "@/types";

export const allProblems: Record<string, Problem> = {
  // ──────── BIOMOLECULES & MEDICINE ────────
  idps: {
    id: "idps",
    name: "Intrinsically Disordered Proteins (IDPs)",
    shortName: "IDPs / Ensembles",
    x: 0.15,
    y: 0.90,
    category: "Biology",
    whyItMatters:
      "~30% of human proteins are disordered. They drive cancer signaling, neurodegeneration, viral entry. AlphaFold cannot model them — it forces a single static structure.",
    whyItsHard:
      "IDPs occupy an ensemble of conformations. You need generative models over distributions, not point predictions. Requires dynamics-aware architectures on SE(3).",
    overlooked: "Very",
    startupAngle:
      'A "Boltzmann AlphaFold" for conformational ensembles → drug targets currently considered "undruggable." Massive pharma demand.',
    tags: ["generative", "biology", "molecular", "drug-discovery"],
  },
  prog_biology: {
    id: "prog_biology",
    name: "Programmable Biology / Genetic Circuits",
    shortName: "Prog Biology",
    x: 0.08,
    y: 0.96,
    category: "Biology",
    whyItMatters:
      "Design cells that sense, compute, and actuate — living therapeutics, biosensors, biomanufacturing.",
    whyItsHard:
      "Combinatorial design space. Circuit behavior is context-dependent (host, growth conditions). No good generative models for genetic regulatory networks.",
    overlooked: "Very",
    startupAngle:
      'A foundation model for gene regulation → design-to-order cell therapies. Think "compiler for biology."',
    tags: ["generative", "biology", "synthetic-biology"],
  },
  protein_codesign: {
    id: "protein_codesign",
    name: "Protein Co-Design (Structure + Sequence)",
    shortName: "Protein Co-Design",
    x: 0.44,
    y: 0.86,
    category: "Biology",
    whyItMatters:
      "Joint generation of backbone geometry and amino acid sequence, rather than pipeline approaches (design structure → inverse fold).",
    whyItsHard:
      "Requires modeling discrete (sequence) and continuous (3D coordinates) spaces simultaneously with SE(3) equivariance. Manifold Jacobian corrections, CTMC + flow coupling.",
    overlooked: "Medium",
    startupAngle:
      "End-to-end protein engineering platform → enzymes, binders, therapeutics designed from scratch with guaranteed foldability.",
    tags: ["generative", "biology", "molecular", "drug-discovery"],
  },
  rna_therapeutics: {
    id: "rna_therapeutics",
    name: "RNA Therapeutics Design",
    shortName: "RNA Therapeutics",
    x: 0.20,
    y: 0.78,
    category: "Biology",
    whyItMatters:
      "mRNA vaccines proved the modality. But designing optimal RNA sequences (stability, secondary structure, immunogenicity) remains largely empirical.",
    whyItsHard:
      "RNA structure prediction is harder than protein folding (flexible, pseudoknots, tertiary contacts). Inverse folding for RNA is nascent.",
    overlooked: "Yes",
    startupAngle:
      "AI-designed mRNA/RNA therapeutics with optimized delivery, stability, and expression. Next-gen vaccine and gene therapy platform.",
    tags: ["generative", "biology", "drug-discovery"],
  },
  genomics_fms: {
    id: "genomics_fms",
    name: "Foundation Models for Genomics",
    shortName: "Genomics FMs",
    x: 0.36,
    y: 0.82,
    category: "Biology",
    whyItMatters:
      'Predict gene expression, regulatory effects, and variant pathogenicity from raw DNA. The "GPT moment" for biology.',
    whyItsHard:
      "Genomes are ~3B bp long. Context windows, tokenization of continuous signals (epigenomics), and lack of labels at scale. Multi-species transfer is unsolved.",
    overlooked: "Medium",
    startupAngle:
      "Precision medicine: predict patient-specific drug response, disease risk, and optimal intervention from whole-genome data.",
    tags: ["foundation-models", "biology", "genomics"],
  },
  antibody_design: {
    id: "antibody_design",
    name: "Antibody Design",
    shortName: "Antibody Design",
    x: 0.68,
    y: 0.80,
    category: "Biology",
    whyItMatters:
      "Antibodies are the fastest-growing drug class ($200B+ market). Designing them computationally can cut discovery timelines from years to weeks.",
    whyItsHard:
      "CDR loop modeling requires extreme precision. Binding affinity prediction is noisy. Need to co-optimize binding, stability, developability, and immunogenicity.",
    overlooked: "Medium-Crowded",
    startupAngle:
      "AI-first antibody discovery platform. Several exist (Absci, Generate Bio) but the design accuracy gap remains wide.",
    tags: ["generative", "biology", "drug-discovery"],
  },
  single_cell_fms: {
    id: "single_cell_fms",
    name: "Single-Cell Foundation Models",
    shortName: "Single-Cell FMs",
    x: 0.28,
    y: 0.74,
    category: "Biology",
    whyItMatters:
      "Model cellular states and transitions at single-cell resolution. Critical for understanding development, disease, and drug response.",
    whyItsHard:
      "Extreme sparsity and noise in scRNA-seq data. Batch effects. Need to capture continuous cell state trajectories and rare cell types.",
    overlooked: "Medium",
    startupAngle:
      "Cell atlas intelligence platform — predict drug effects at single-cell resolution for patient stratification.",
    tags: ["foundation-models", "biology", "genomics"],
  },
  protein_protein_int: {
    id: "protein_protein_int",
    name: "Protein-Protein Interactions",
    shortName: "Protein-Protein Int",
    x: 0.32,
    y: 0.66,
    category: "Biology",
    whyItMatters:
      "Most biological functions are mediated by protein complexes. Predicting which proteins interact and how is fundamental to drug design.",
    whyItsHard:
      "Combinatorial explosion of possible pairs. Transient interactions are hard to capture. AlphaFold-Multimer helps but accuracy drops for transient/weak interactions.",
    overlooked: "Medium",
    startupAngle:
      "Interactome mapping platform for target discovery — predict druggable PPIs and design molecules that modulate them.",
    tags: ["biology", "molecular", "drug-discovery"],
  },
  enzyme_engineering: {
    id: "enzyme_engineering",
    name: "Enzyme Engineering",
    shortName: "Enzyme Engineering",
    x: 0.22,
    y: 0.62,
    category: "Biology",
    whyItMatters:
      "Enzymes catalyze reactions with exquisite specificity. Engineering them enables green chemistry, biomanufacturing, and novel therapeutics.",
    whyItsHard:
      "Activity and stability are often at odds. Directed evolution is slow. ML models need to predict function from sequence, not just structure.",
    overlooked: "Medium",
    startupAngle:
      "AI-guided enzyme optimization platform for industrial biotechnology — faster than directed evolution by orders of magnitude.",
    tags: ["generative", "biology", "molecular"],
  },
  microbiome_eng: {
    id: "microbiome_eng",
    name: "Microbiome Engineering",
    shortName: "Microbiome Eng",
    x: 0.10,
    y: 0.56,
    category: "Biology",
    whyItMatters:
      "The gut microbiome influences metabolism, immunity, and neurological function. Engineering it could treat IBD, obesity, depression.",
    whyItsHard:
      "Ecosystems of thousands of interacting species. Personalized — varies across individuals. Longitudinal dynamics are poorly understood.",
    overlooked: "Very",
    startupAngle:
      "Computational microbiome design platform — predict community compositions that optimize health outcomes.",
    tags: ["biology", "synthetic-biology"],
  },
  vaccine_design: {
    id: "vaccine_design",
    name: "Vaccine Design",
    shortName: "Vaccine Design",
    x: 0.18,
    y: 0.50,
    category: "Biology",
    whyItMatters:
      "COVID proved the power of rapid vaccine design. AI could accelerate antigen selection, adjuvant optimization, and immune response prediction.",
    whyItsHard:
      "Immune system modeling is incredibly complex. Epitope prediction has high false positive rates. Animal-to-human translation is unreliable.",
    overlooked: "Yes",
    startupAngle:
      "AI-driven vaccine design platform — predict optimal antigens and formulations to accelerate pandemic preparedness.",
    tags: ["biology", "drug-discovery"],
  },
  epigenomics: {
    id: "epigenomics",
    name: "Epigenomics",
    shortName: "Epigenomics",
    x: 0.26,
    y: 0.44,
    category: "Biology",
    whyItMatters:
      "Epigenetic modifications regulate gene expression without changing DNA. Key to understanding cancer, aging, and cellular reprogramming.",
    whyItsHard:
      "Multi-modal data (methylation, histone marks, chromatin accessibility). Cell-type-specific. Temporal dynamics are poorly captured.",
    overlooked: "Yes",
    startupAngle:
      "Epigenetic clock and reprogramming prediction platform — applications in longevity and cancer diagnostics.",
    tags: ["biology", "genomics"],
  },
  rare_disease: {
    id: "rare_disease",
    name: "Rare Disease Genomics",
    shortName: "Rare Disease",
    x: 0.12,
    y: 0.38,
    category: "Biology",
    whyItMatters:
      "~400M people globally have rare diseases. Aggregated, it's a massive unmet need. Transfer learning from common diseases and multi-task models could help.",
    whyItsHard:
      "Small patient populations = small datasets = hard to publish. No big pharma interest (market too small per disease).",
    overlooked: "Very",
    startupAngle:
      "AI diagnostics for rare diseases (faster diagnosis = lives saved). Orphan drug incentives make even small markets viable.",
    tags: ["biology", "genomics", "drug-discovery"],
  },
  glycan_modeling: {
    id: "glycan_modeling",
    name: "Glycan Modeling",
    shortName: "Glycan Modeling",
    x: 0.06,
    y: 0.32,
    category: "Biology",
    whyItMatters:
      "Glycans coat every cell surface and mediate immune recognition, infection, and cancer metastasis. They're the 'dark matter' of biology.",
    whyItsHard:
      "Branching structures (not linear chains like proteins/DNA). Extreme diversity. Very few structural databases. No AlphaFold equivalent.",
    overlooked: "Very",
    startupAngle:
      "Glycan-aware drug design and biomarker discovery — a completely underserved computational space.",
    tags: ["biology", "molecular"],
  },
  protein_folding: {
    id: "protein_folding",
    name: "Static Protein Folding",
    shortName: "Protein Folding",
    x: 0.92,
    y: 0.54,
    category: "Biology",
    whyItMatters:
      "AlphaFold 2/3 largely solved single-chain structure prediction. Incremental improvements on benchmarks.",
    whyItsHard:
      "The leaderboard is saturated. Real remaining challenges (dynamics, complexes, disorder) are different problems.",
    overlooked: "Very Crowded",
    startupAngle:
      "Another 0.5% GDT improvement changes nothing. The marginal return to one more researcher is low.",
    tags: ["biology", "molecular", "crowded"],
  },
  small_mol_gen: {
    id: "small_mol_gen",
    name: "Small Molecule Generation",
    shortName: "Small Mol Gen",
    x: 0.86,
    y: 0.42,
    category: "Biology",
    whyItMatters:
      "Dozens of diffusion/flow/VAE/GAN models generate drug-like molecules. Most optimize easy proxy metrics (QED, SA score).",
    whyItsHard:
      'The bottleneck was never "generate more molecules" — it\'s synthesizability, selectivity, ADMET, and clinical translation.',
    overlooked: "Very Crowded",
    startupAngle:
      "Models that only optimize computed properties are a commodity. Need to solve synthesizability and clinical translation.",
    tags: ["generative", "biology", "molecular", "crowded"],
  },
  docking: {
    id: "docking",
    name: "Protein-Ligand Docking",
    shortName: "Docking",
    x: 0.78,
    y: 0.34,
    category: "Biology",
    whyItMatters:
      "ML docking (DiffDock, etc.) improved speed but scoring accuracy plateaued. Still doesn't reliably predict binding affinity.",
    whyItsHard:
      "Docking without accurate free energy estimation is limited. The real value is in FEP/binding affinity, not pose prediction.",
    overlooked: "Crowded",
    startupAngle:
      "Crowded with incremental improvements. The real opportunity is in free energy perturbation methods.",
    tags: ["biology", "molecular", "drug-discovery", "crowded"],
  },
  qsar: {
    id: "qsar",
    name: "QSAR / Molecular Property Prediction",
    shortName: "QSAR",
    x: 0.82,
    y: 0.24,
    category: "Biology",
    whyItMatters:
      "Predicting molecular properties (toxicity, solubility, logP) from structure. A classic cheminformatics task with decades of work.",
    whyItsHard:
      "Marginal gains from fancier architectures are tiny. The bottleneck is data quality and domain shift, not model capacity.",
    overlooked: "Very Crowded",
    startupAngle:
      "Random forests still competitive on many benchmarks. Low marginal return to new approaches.",
    tags: ["biology", "molecular", "crowded"],
  },
  drug_repurposing: {
    id: "drug_repurposing",
    name: "Drug Repurposing via Knowledge Graphs",
    shortName: "Drug Repurposing",
    x: 0.74,
    y: 0.16,
    category: "Biology",
    whyItMatters:
      "Many startups and papers linking drugs → targets → diseases via graph neural networks on biomedical KGs.",
    whyItsHard:
      "Knowledge graphs are incomplete, noisy, and biased toward well-studied entities. Predictions rarely validate experimentally.",
    overlooked: "Crowded",
    startupAngle:
      '"Link prediction on KG" ≠ drug discovery. Low defensibility, low validation rates.',
    tags: ["biology", "drug-discovery", "crowded"],
  },

  // ──────── MATERIALS & CHEMICAL SYSTEMS ────────
  catalyst_design: {
    id: "catalyst_design",
    name: "Catalyst Discovery & Design",
    shortName: "Catalyst Design",
    x: 0.22,
    y: 0.92,
    category: "Chemistry",
    whyItMatters:
      "Catalysts underpin 90% of chemical manufacturing. Better catalysts = cheaper green hydrogen, CO₂ conversion, fertilizer.",
    whyItsHard:
      "Catalytic surfaces involve complex electronic structure, reaction intermediates, and dynamic restructuring. DFT is expensive; ML surrogates need to capture reactivity, not just geometry.",
    overlooked: "Yes",
    startupAngle:
      'AI-first catalyst design for green chemistry. Think: "design a catalyst for X reaction in Y conditions." Huge industrial TAM (chemicals = $5T+ market).',
    tags: ["generative", "chemistry", "materials", "simulation"],
  },
  csp: {
    id: "csp",
    name: "Crystal Structure Prediction (CSP)",
    shortName: "Crystal Struct Pred",
    x: 0.10,
    y: 0.86,
    category: "Chemistry",
    whyItMatters:
      "Predict how molecules pack into crystals. Determines drug bioavailability (polymorphs), battery performance, semiconductor properties.",
    whyItsHard:
      "Exponential search space. Must model periodic symmetries (SE(3) × torus). All-atom diffusion ignores crystallographic constraints.",
    overlooked: "Yes",
    startupAngle:
      "Polymorph prediction for pharma (avoid billion-dollar patent cliffs from unexpected crystal forms). Materials-by-design for batteries and semiconductors.",
    tags: ["generative", "chemistry", "materials"],
  },
  multi_scale_sim: {
    id: "multi_scale_sim",
    name: "Multi-Scale Biological Simulation",
    shortName: "Multi-Scale Sim",
    x: 0.16,
    y: 0.80,
    category: "Chemistry",
    whyItMatters:
      "Bridge quantum → atomistic → coarse-grained → cellular → tissue scales in a single coherent framework.",
    whyItsHard:
      "Each scale has different physics, timescales (fs to hours), and representations. No unified ML framework exists. Requires learning across resolutions.",
    overlooked: "Very",
    startupAngle:
      'A "digital twin" for cells/organs that can simulate drug effects across scales. The holy grail of computational biology.',
    tags: ["simulation", "chemistry", "biology"],
  },
  dft_surrogates: {
    id: "dft_surrogates",
    name: "Quantum Chemistry Surrogates (DFT)",
    shortName: "DFT Surrogates",
    x: 0.40,
    y: 0.78,
    category: "Chemistry",
    whyItMatters:
      "Replace expensive DFT/CCSD(T) calculations with ML models that predict electronic structure, energies, and properties at near-quantum accuracy.",
    whyItsHard:
      "Generalization across chemical space. Capturing electron correlation. Need equivariant models that respect orbital symmetries, not just nuclear positions.",
    overlooked: "Medium",
    startupAngle:
      "Cloud-hosted ML quantum chemistry engine — 1000x faster than Gaussian, pay-per-molecule. Computational chemistry as a service.",
    tags: ["simulation", "chemistry", "quantum"],
  },
  battery_materials: {
    id: "battery_materials",
    name: "Battery Materials Discovery",
    shortName: "Battery Materials",
    x: 0.30,
    y: 0.74,
    category: "Chemistry",
    whyItMatters:
      "Next-gen batteries (solid-state, sodium-ion) require discovering new electrode and electrolyte materials with optimal properties.",
    whyItsHard:
      "Multi-objective optimization (capacity, stability, conductivity, cost). Requires modeling electrochemical interfaces and ion transport.",
    overlooked: "Medium",
    startupAngle:
      "AI-driven battery materials discovery platform — critical for EV and grid storage markets ($100B+).",
    tags: ["materials", "chemistry", "simulation"],
  },
  ml_force_fields: {
    id: "ml_force_fields",
    name: "ML Force Fields (MLIPs)",
    shortName: "ML Force Fields",
    x: 0.60,
    y: 0.76,
    category: "Chemistry",
    whyItMatters:
      "Simulate molecular dynamics at near-DFT accuracy but 10⁴–10⁶x faster. Essential for drug binding, protein dynamics, materials.",
    whyItsHard:
      "Generalization to unseen chemistries. Long-range electrostatics. Stability over long MD trajectories (error accumulation). Training data is expensive.",
    overlooked: "Getting Crowded",
    startupAngle:
      "Universal force field platform (like MACE/ANI but production-grade) → powers virtual screening, materials simulation, and formulation design.",
    tags: ["simulation", "chemistry", "molecular"],
  },
  polymer_design: {
    id: "polymer_design",
    name: "Polymer Design",
    shortName: "Polymer Design",
    x: 0.14,
    y: 0.68,
    category: "Chemistry",
    whyItMatters:
      "Design polymers with target properties (strength, degradability, conductivity). Critical for sustainable materials.",
    whyItsHard:
      "Polymer property prediction requires capturing long-range chain statistics. Lack of standardized representations and datasets.",
    overlooked: "Yes",
    startupAngle:
      "AI polymer design for sustainable packaging, advanced materials, and drug delivery systems.",
    tags: ["generative", "chemistry", "materials"],
  },
  mof_design: {
    id: "mof_design",
    name: "Metal-Organic Framework (MOF) Design",
    shortName: "MOF Design",
    x: 0.08,
    y: 0.62,
    category: "Chemistry",
    whyItMatters:
      "MOFs are nanoporous materials with applications in carbon capture, gas storage, and catalysis. Modular building blocks enable vast design spaces.",
    whyItsHard:
      "Combinatorial design space of linkers and metal nodes. Need to predict stability, porosity, and gas uptake simultaneously.",
    overlooked: "Yes",
    startupAngle:
      "AI-designed MOFs for carbon capture and hydrogen storage — aligns with climate investment trends.",
    tags: ["generative", "chemistry", "materials"],
  },
  retrosynthesis: {
    id: "retrosynthesis",
    name: "Retrosynthesis & Reaction Planning",
    shortName: "Retrosynthesis",
    x: 0.52,
    y: 0.66,
    category: "Chemistry",
    whyItMatters:
      "Given a target molecule, find a viable synthetic route from commercially available starting materials.",
    whyItsHard:
      "Requires modeling reaction feasibility, selectivity, yields, and multi-step planning. Current models struggle with strategic planning over long routes.",
    overlooked: "Medium",
    startupAngle:
      "AI synthesis planner integrated with robotic chemistry → autonomous molecule-making. Lab-as-a-service for on-demand small molecules.",
    tags: ["agents", "chemistry"],
  },
  semiconductor_design: {
    id: "semiconductor_design",
    name: "Semiconductor Design",
    shortName: "Semiconductor Design",
    x: 0.34,
    y: 0.58,
    category: "Chemistry",
    whyItMatters:
      "Design novel semiconductor materials with tailored band gaps, mobility, and thermal properties for next-gen electronics.",
    whyItsHard:
      "Requires accurate electronic structure calculations. Defect engineering and interfaces are poorly modeled. Manufacturing constraints add complexity.",
    overlooked: "Medium",
    startupAngle:
      "AI-accelerated semiconductor materials discovery for chipmakers and photovoltaics companies.",
    tags: ["materials", "chemistry", "simulation"],
  },
  reaction_mechanisms: {
    id: "reaction_mechanisms",
    name: "Reaction Mechanism Prediction",
    shortName: "Reaction Mechanisms",
    x: 0.20,
    y: 0.54,
    category: "Chemistry",
    whyItMatters:
      "Understanding reaction mechanisms (transition states, intermediates) is key to catalyst design and process optimization.",
    whyItsHard:
      "Transition state search is expensive. Mechanisms can have multiple competing pathways. Need to model rare events on high-dimensional energy surfaces.",
    overlooked: "Yes",
    startupAngle:
      "Automated mechanism elucidation platform for chemical process optimization and safety assessment.",
    tags: ["simulation", "chemistry"],
  },
  electrochemistry: {
    id: "electrochemistry",
    name: "Electrochemistry Modeling",
    shortName: "Electrochemistry",
    x: 0.26,
    y: 0.48,
    category: "Chemistry",
    whyItMatters:
      "Electrochemical processes underpin batteries, fuel cells, electrolyzers, and corrosion. Modeling electrode-electrolyte interfaces is critical.",
    whyItsHard:
      "Requires coupling electronic structure with solvation, applied potential, and ion transport. Multi-scale and multi-physics challenge.",
    overlooked: "Yes",
    startupAngle:
      "Computational electrochemistry platform for battery and fuel cell development — faster optimization cycles.",
    tags: ["simulation", "chemistry", "materials"],
  },
  photovoltaics: {
    id: "photovoltaics",
    name: "Photovoltaics Materials",
    shortName: "Photovoltaics",
    x: 0.18,
    y: 0.42,
    category: "Chemistry",
    whyItMatters:
      "Design new photovoltaic materials (perovskites, organic PV) with higher efficiency and stability for solar energy.",
    whyItsHard:
      "Need to optimize band gap, charge transport, stability, and manufacturing cost simultaneously. Degradation pathways are complex.",
    overlooked: "Medium",
    startupAngle:
      "AI-guided perovskite and next-gen solar cell materials discovery and optimization.",
    tags: ["materials", "chemistry"],
  },
  formulation_design: {
    id: "formulation_design",
    name: "Formulation Design",
    shortName: "Formulation Design",
    x: 0.12,
    y: 0.36,
    category: "Chemistry",
    whyItMatters:
      "Drug formulation determines bioavailability, stability, and patient compliance. Critical for oral drug delivery and biologics.",
    whyItsHard:
      "Complex mixtures with many excipients. Phase behavior and stability depend on subtle interactions. Very little systematic data.",
    overlooked: "Very",
    startupAngle:
      "AI formulation optimization platform for pharma — reduce time-to-formulation from months to days.",
    tags: ["chemistry", "drug-discovery"],
  },

  // ──────── PHYSICAL SYSTEMS & EARTH ────────
  plasma_fusion: {
    id: "plasma_fusion",
    name: "Plasma Physics & Fusion Control",
    shortName: "Plasma / Fusion",
    x: 0.10,
    y: 0.92,
    category: "Physics",
    whyItMatters:
      "Fusion = unlimited clean energy. Controlling plasma instabilities is the #1 bottleneck.",
    whyItsHard:
      "Plasma is a chaotic, multi-scale system. Real-time control requires <1ms latency. Simulators are expensive. RL controllers trained in sim often don't transfer.",
    overlooked: "Yes",
    startupAngle:
      "AI control systems for fusion reactors. Several fusion startups exist but ML-native plasma control is a gap.",
    tags: ["simulation", "physics", "rl"],
  },
  turbulence: {
    id: "turbulence",
    name: "Turbulence Modeling",
    shortName: "Turbulence",
    x: 0.18,
    y: 0.86,
    category: "Physics",
    whyItMatters:
      '"The last great unsolved problem of classical physics." Better turbulence models → better weather prediction, aerodynamics, combustion, ocean currents.',
    whyItsHard:
      "Kolmogorov cascade spans many orders of magnitude. DNS is computationally intractable at high Reynolds numbers. ML closures for LES are promising but lack guarantees.",
    overlooked: "Yes",
    startupAngle:
      "ML-augmented CFD solver that is 100x faster than DNS with LES-like cost but DNS-like accuracy. Engineering simulation market is $10B+.",
    tags: ["simulation", "physics"],
  },
  boltzmann: {
    id: "boltzmann",
    name: "Sampling High-Dimensional Boltzmann Distributions",
    shortName: "Boltzmann Sampling",
    x: 0.36,
    y: 0.80,
    category: "Physics",
    whyItMatters:
      "Central to statistical physics, molecular simulation, and Bayesian inference. If you can efficiently sample, you can compute free energies, predict binding affinities, and characterize phase transitions.",
    whyItsHard:
      "Curse of dimensionality. MCMC mixes slowly in rugged energy landscapes. Flow-based samplers struggle with multimodality and mode collapse in high dimensions.",
    overlooked: "Medium",
    startupAngle:
      'A "sampling engine" that makes free energy calculations routine → pharma pays for reliable binding free energy perturbation.',
    tags: ["simulation", "physics", "molecular"],
  },
  neural_pdes: {
    id: "neural_pdes",
    name: "Neural PDE Solvers / Operator Learning",
    shortName: "Neural PDEs",
    x: 0.50,
    y: 0.74,
    category: "Physics",
    whyItMatters:
      "Learn solution operators for PDEs (Navier-Stokes, Maxwell, Schrödinger) instead of solving from scratch. 100-1000x speedup for engineering simulation.",
    whyItsHard:
      "Generalization across geometries and boundary conditions. Guaranteeing conservation laws. Error bounds. Current neural operators lack reliability for safety-critical applications.",
    overlooked: "Medium",
    startupAngle:
      "AI-native simulation software for engineering (replace ANSYS/COMSOL with learned solvers). Real-time digital twins for aerospace, automotive, energy.",
    tags: ["simulation", "physics", "infrastructure"],
  },
  climate_emulators: {
    id: "climate_emulators",
    name: "Climate Emulators & Downscaling",
    shortName: "Climate Emulators",
    x: 0.64,
    y: 0.78,
    category: "Physics",
    whyItMatters:
      "Run climate projections in minutes instead of months. Enable high-resolution local climate predictions for adaptation planning.",
    whyItsHard:
      "Climate models have many coupled subsystems. Rare extreme events are hardest to model but most important. Distribution shift as climate changes.",
    overlooked: "Getting Attention",
    startupAngle:
      "Hyperlocal climate risk prediction for insurance, agriculture, infrastructure planning. Massive market pull from climate adaptation spending.",
    tags: ["simulation", "physics", "earth"],
  },
  cosmological_sim: {
    id: "cosmological_sim",
    name: "Cosmological Simulation",
    shortName: "Cosmological Sim",
    x: 0.12,
    y: 0.70,
    category: "Physics",
    whyItMatters:
      "Simulate universe evolution to test cosmological models and interpret survey data from JWST, Euclid, and Rubin Observatory.",
    whyItsHard:
      "Enormous dynamic range (from galaxy clusters to dark matter halos). N-body simulations are expensive. Requires emulation that preserves statistical properties.",
    overlooked: "Yes",
    startupAngle:
      "Fast cosmological emulators for survey data analysis — could become essential infrastructure for space agencies.",
    tags: ["simulation", "physics"],
  },
  ocean_modeling: {
    id: "ocean_modeling",
    name: "Ocean Modeling",
    shortName: "Ocean Modeling",
    x: 0.22,
    y: 0.64,
    category: "Physics",
    whyItMatters:
      "Oceans absorb ~30% of CO₂ and >90% of excess heat. Better ocean models → better climate projections and marine ecosystem management.",
    whyItsHard:
      "Multi-scale turbulent flows, biogeochemistry coupling, ice-ocean interactions. Sparse observational data in the deep ocean.",
    overlooked: "Yes",
    startupAngle:
      "Ocean digital twin for aquaculture, shipping, and offshore energy — combining ML with ocean physics.",
    tags: ["simulation", "physics", "earth"],
  },
  seismology: {
    id: "seismology",
    name: "Seismology & Earthquake Prediction",
    shortName: "Seismology",
    x: 0.14,
    y: 0.56,
    category: "Physics",
    whyItMatters:
      "Earthquake early warning and risk assessment save lives. Better seismic inversion → oil/gas exploration and geothermal energy.",
    whyItsHard:
      "Earthquake prediction remains elusive. Seismic wave propagation is complex (heterogeneous media, attenuation). Sparse station networks.",
    overlooked: "Yes",
    startupAngle:
      "ML-augmented seismic monitoring for earthquake early warning and subsurface imaging (geothermal, CCS).",
    tags: ["simulation", "physics", "earth"],
  },
  grav_waves: {
    id: "grav_waves",
    name: "Gravitational Wave Detection",
    shortName: "Grav Waves",
    x: 0.08,
    y: 0.50,
    category: "Physics",
    whyItMatters:
      "LIGO/Virgo opened a new window on the universe. ML can accelerate signal detection and parameter estimation from noisy interferometer data.",
    whyItsHard:
      "Signals are buried in complex instrumental noise. Need real-time low-latency detection. Template banks are computationally expensive.",
    overlooked: "Yes",
    startupAngle:
      "Real-time ML pipeline for gravitational wave detection — could become standard infrastructure for next-gen observatories.",
    tags: ["simulation", "physics"],
  },
  wildfire: {
    id: "wildfire",
    name: "Wildfire Prediction",
    shortName: "Wildfire Prediction",
    x: 0.26,
    y: 0.44,
    category: "Physics",
    whyItMatters:
      "Wildfires cause billions in damage annually and are increasing with climate change. Prediction models can save lives and property.",
    whyItsHard:
      "Depends on weather, vegetation, topography, and human factors. Chaotic fire spread dynamics. Sparse historical data for extreme events.",
    overlooked: "Medium",
    startupAngle:
      "AI wildfire risk prediction for insurance, utilities, and emergency management — growing market due to climate change.",
    tags: ["simulation", "physics", "earth"],
  },
  dark_matter: {
    id: "dark_matter",
    name: "Dark Matter / High Energy Physics",
    shortName: "Dark Matter / HEP",
    x: 0.20,
    y: 0.38,
    category: "Physics",
    whyItMatters:
      "~85% of matter is dark. ML can help detect rare events in particle physics experiments and constrain dark matter models.",
    whyItsHard:
      "Extreme needle-in-haystack problem. Systematic uncertainties dominate. Need ML that's robust to distribution shift between simulation and real data.",
    overlooked: "Medium",
    startupAngle:
      "ML-powered data analysis pipelines for particle physics — could also apply to rare event detection in other domains.",
    tags: ["simulation", "physics"],
  },
  astro_transients: {
    id: "astro_transients",
    name: "Astronomical Transients",
    shortName: "Astro Transients",
    x: 0.16,
    y: 0.32,
    category: "Physics",
    whyItMatters:
      "Upcoming surveys (LSST) will detect millions of transient events per night. Need automated classification and follow-up prioritization.",
    whyItsHard:
      "Heterogeneous, sparse, irregularly sampled light curves. Real-time classification under extreme data volume. Few labeled examples for rare types.",
    overlooked: "Medium",
    startupAngle:
      "Astronomical event broker with ML classification — infrastructure for the LSST era.",
    tags: ["simulation", "physics"],
  },
  weather_forecasting: {
    id: "weather_forecasting",
    name: "Weather Forecasting",
    shortName: "Weather Forecasting",
    x: 0.74,
    y: 0.68,
    category: "Physics",
    whyItMatters:
      "ML weather models (GraphCast, Pangu, GenCast) now rival or beat physics-based NWP. But medium-range and extreme event prediction still need work.",
    whyItsHard:
      "Capturing tail events. Ensemble generation for uncertainty. Integration with existing meteorological workflows and data assimilation.",
    overlooked: "Getting Crowded",
    startupAngle:
      "Several well-funded efforts (Google, Huawei, ECMWF). Hard to compete on global models, but niche applications (agriculture, energy) have room.",
    tags: ["simulation", "physics", "earth"],
  },
  pinns: {
    id: "pinns",
    name: "Physics-Informed Neural Networks (PINNs)",
    shortName: "PINNs",
    x: 0.70,
    y: 0.36,
    category: "Physics",
    whyItMatters:
      "Embed physical laws directly into neural network training via PDE residual losses. Promising for data-scarce regimes.",
    whyItsHard:
      "Training instabilities (stiff multi-objective loss). Often slower than classical solvers for well-posed problems. Generalization is limited.",
    overlooked: "Crowded",
    startupAngle:
      "Many papers but few practical wins. Neural operators (FNO) have largely overtaken PINNs for most applications.",
    tags: ["simulation", "physics", "crowded"],
  },

  // ──────── MATH, QUANTUM & META-SCIENCE ────────
  qec: {
    id: "qec",
    name: "Quantum Error Correction",
    shortName: "Quantum Error Corr",
    x: 0.54,
    y: 0.94,
    category: "Quantum",
    whyItMatters:
      "Without fault-tolerant QEC, quantum computers remain noisy toys. Cracking this unlocks quantum advantage for drug design, optimization, cryptography.",
    whyItsHard:
      "Enormous qubit overhead (1000+ physical qubits per logical qubit). Decoder latency must match hardware cycle time. Surface codes dominate but may not be optimal.",
    overlooked: "Medium-Crowded",
    startupAngle:
      'ML-optimized decoders and code design for specific hardware. Sell to quantum hardware companies or build the "compiler layer" for fault-tolerant quantum.',
    tags: ["quantum", "infrastructure"],
  },
  theorem_proving: {
    id: "theorem_proving",
    name: "AI for Theorem Proving",
    shortName: "AI Theorem Proving",
    x: 0.46,
    y: 0.88,
    category: "Math",
    whyItMatters:
      "Automate or assist mathematical proof discovery. Verified proofs guarantee correctness — critical for hardware, cryptography, and advancing pure math.",
    whyItsHard:
      "Proofs require creative leaps, not just pattern matching. Search space is infinite and sparse. Current models can handle exercises but struggle with research-level problems.",
    overlooked: "Medium",
    startupAngle:
      "Formal verification engine for hardware/software (Intel, AMD, crypto companies). Proof assistant that 10x accelerates mathematicians.",
    tags: ["reasoning", "math", "infrastructure"],
  },
  agentic_scientists: {
    id: "agentic_scientists",
    name: "Agentic Scientists",
    shortName: "Agentic Scientists",
    x: 0.50,
    y: 0.82,
    category: "Meta-Science",
    whyItMatters:
      "AI systems that autonomously form hypotheses, design experiments, interpret results, and iterate — the ultimate scientific productivity multiplier.",
    whyItsHard:
      "Requires integrating LLM reasoning, domain-specific generative models, tool use, and experimental feedback loops. Verification of scientific claims is hard.",
    overlooked: "Medium",
    startupAngle:
      "The 'AlphaGo for science' play. FutureHouse is one attempt, but the design space is vast and the field is nascent.",
    tags: ["agents", "reasoning", "infrastructure"],
  },
  quantum_sim: {
    id: "quantum_sim",
    name: "Quantum Simulation of Materials",
    shortName: "Quantum Sim",
    x: 0.34,
    y: 0.78,
    category: "Quantum",
    whyItMatters:
      "Simulate strongly correlated quantum systems (superconductors, catalysts, exotic materials) where classical methods fail fundamentally.",
    whyItsHard:
      "Requires actual quantum hardware or clever classical-quantum hybrid methods. Variational approaches hit barren plateaus. Noise kills coherence.",
    overlooked: "Medium",
    startupAngle:
      "Hybrid classical-quantum simulation platform for materials R&D. Near-term: classical ML surrogates trained on small quantum calculations.",
    tags: ["quantum", "simulation", "materials"],
  },
  algorithm_discovery: {
    id: "algorithm_discovery",
    name: "Algorithm Discovery",
    shortName: "Algorithm Discovery",
    x: 0.26,
    y: 0.74,
    category: "Math",
    whyItMatters:
      "Use AI to discover faster algorithms (matrix multiplication, sorting, optimization). AlphaEvolve showed this is possible.",
    whyItsHard:
      "Vast search space of possible programs. Need to verify correctness and optimality. Defining the right reward signal is non-trivial.",
    overlooked: "Medium",
    startupAngle:
      "AI-discovered algorithms for specific hardware targets — sell compiler optimizations to chip companies.",
    tags: ["reasoning", "math"],
  },
  conjecture_gen: {
    id: "conjecture_gen",
    name: "Conjecture Generation",
    shortName: "Conjecture Gen",
    x: 0.18,
    y: 0.70,
    category: "Math",
    whyItMatters:
      "AI that generates novel mathematical conjectures — not just proves them. Could accelerate pure mathematics by suggesting unexpected connections.",
    whyItsHard:
      "What makes a conjecture 'interesting'? Need to balance novelty, difficulty, and significance. Very few successful examples so far.",
    overlooked: "Yes",
    startupAngle:
      "Research tool for mathematicians — AI collaborator that suggests conjectures and proof strategies.",
    tags: ["reasoning", "math"],
  },
  scientific_rl: {
    id: "scientific_rl",
    name: "Verifiable Rewards for Scientific RL",
    shortName: "Scientific RL",
    x: 0.32,
    y: 0.68,
    category: "Math",
    whyItMatters:
      "RL works spectacularly when you can verify solutions cheaply. Science has many such problems: does this molecule dock? Does this proof check?",
    whyItsHard:
      "Defining reward functions that capture real scientific merit. Verification can be expensive. Sparse rewards in long-horizon discovery tasks.",
    overlooked: "Yes",
    startupAngle:
      "RL-powered scientific discovery engine that generates and verifies hypotheses autonomously.",
    tags: ["rl", "reasoning", "infrastructure"],
  },
  symbolic_regression: {
    id: "symbolic_regression",
    name: "Symbolic Regression & Equation Discovery",
    shortName: "Symbolic Regression",
    x: 0.24,
    y: 0.64,
    category: "Math",
    whyItMatters:
      "Discover interpretable governing equations from data. The dream: point a model at experimental data and recover Newton's laws.",
    whyItsHard:
      "Search over expression trees is combinatorially hard. Balancing complexity and fit. Noisy, partial data. Current methods fail on high-dimensional systems.",
    overlooked: "Yes",
    startupAngle:
      "Automated scientific law discovery platform. Sell to pharma (PK/PD models), engineering (constitutive laws), and finance.",
    tags: ["reasoning", "math", "infrastructure"],
  },
  manifold_learning: {
    id: "manifold_learning",
    name: "Learning on Manifolds & Geometric Priors",
    shortName: "Manifold Learning",
    x: 0.14,
    y: 0.58,
    category: "Math",
    whyItMatters:
      "Many scientific data live on non-Euclidean spaces (rotations, tori, symmetric spaces). Ignoring geometry wastes data and breaks symmetries.",
    whyItsHard:
      "Defining proper distributions, flows, and diffusion processes on general manifolds. Computing Jacobians. Efficient parameterization.",
    overlooked: "Yes",
    startupAngle:
      "Geometry-aware generative modeling toolkit. Foundational infrastructure layer that every molecular/materials AI company needs.",
    tags: ["reasoning", "math", "infrastructure"],
  },
  causal_discovery: {
    id: "causal_discovery",
    name: "Causal Discovery",
    shortName: "Causal Discovery",
    x: 0.20,
    y: 0.52,
    category: "Math",
    whyItMatters:
      "Infer causal relationships from observational data. Essential for understanding mechanisms, not just correlations, in science.",
    whyItsHard:
      "Causal discovery from observational data alone requires strong assumptions. Scaling to high dimensions. Handling hidden confounders.",
    overlooked: "Medium",
    startupAngle:
      "Causal AI platform for drug target identification and clinical trial design — move beyond correlation-based approaches.",
    tags: ["reasoning", "math"],
  },
  uncertainty_quant: {
    id: "uncertainty_quant",
    name: "Uncertainty Quantification",
    shortName: "Uncertainty Quant",
    x: 0.30,
    y: 0.46,
    category: "Math",
    whyItMatters:
      "Scientific ML predictions are useless without reliable uncertainty estimates. Critical for safety-critical applications.",
    whyItsHard:
      "Calibrated uncertainty in deep learning is an open problem. Epistemic vs. aleatoric uncertainty. Distributional shift detection.",
    overlooked: "Medium",
    startupAngle:
      "UQ-as-a-service layer for any ML model — sell confidence intervals alongside predictions.",
    tags: ["reasoning", "infrastructure"],
  },
  peft_sci_fms: {
    id: "peft_sci_fms",
    name: "Continual Learning / PEFT for Science FMs",
    shortName: "PEFT for Sci FMs",
    x: 0.16,
    y: 0.42,
    category: "Meta-Science",
    whyItMatters:
      "Fine-tune foundation models to new domains, conditions, or organisms without catastrophic forgetting and with minimal data.",
    whyItsHard:
      "Distribution shift is severe in science (new species, new materials, new conditions). LoRA-style adapters work but theory is thin.",
    overlooked: "Yes",
    startupAngle:
      "Model adaptation platform: take a base protein/chemistry FM and cheaply specialize it for proprietary data.",
    tags: ["infrastructure", "foundation-models"],
  },
  interpretable_ml: {
    id: "interpretable_ml",
    name: "Interpretable ML for Science",
    shortName: "Interpretable ML",
    x: 0.28,
    y: 0.38,
    category: "Math",
    whyItMatters:
      "Scientists need to understand why a model makes a prediction, not just what it predicts. Interpretability builds trust and generates hypotheses.",
    whyItsHard:
      "Post-hoc explanations are often unreliable. Inherently interpretable models sacrifice performance. Domain-specific interpretability is hard to formalize.",
    overlooked: "Medium",
    startupAngle:
      "Explainable AI toolkit for scientific applications — bridge the trust gap for ML adoption in regulated industries.",
    tags: ["reasoning", "infrastructure"],
  },
  sci_data_infra: {
    id: "sci_data_infra",
    name: "Scientific Data Infrastructure",
    shortName: "Sci Data Infra",
    x: 0.10,
    y: 0.34,
    category: "Meta-Science",
    whyItMatters:
      "Most experimental data is lost, siloed, or unstructured. ML models are starving for high-quality scientific training data.",
    whyItsHard:
      "Data is heterogeneous (spectra, images, sequences, graphs). No universal schema. Incentives are misaligned (publish, don't share data).",
    overlooked: "Very",
    startupAngle:
      'The "Hugging Face for science" — structured, queryable datasets with provenance.',
    tags: ["infrastructure"],
  },
  reproducibility: {
    id: "reproducibility",
    name: "Scientific Reproducibility Tools",
    shortName: "Reproducibility",
    x: 0.08,
    y: 0.28,
    category: "Meta-Science",
    whyItMatters:
      "Irreproducibility costs ~$28B/year in the US alone. AI that detects statistical errors, flags p-hacking, or auto-generates reproducibility reports has real demand.",
    whyItsHard:
      "Nobody gets citations for making experiments more reproducible. Negative result: no glory.",
    overlooked: "Very",
    startupAngle:
      'Compliance/audit tool for journals, funding agencies, and pharma. Think "Grammarly for scientific rigor."',
    tags: ["infrastructure"],
  },
  qml: {
    id: "qml",
    name: "Quantum ML (QML)",
    shortName: "Quantum ML",
    x: 0.76,
    y: 0.26,
    category: "Quantum",
    whyItMatters:
      "Quantum speedups for ML tasks — kernel methods, sampling, optimization.",
    whyItsHard:
      "No convincing quantum advantage for practical ML problems has been demonstrated. Barren plateaus plague variational quantum circuits.",
    overlooked: "Crowded + Overhyped",
    startupAngle:
      "⚠️ Proceed with extreme caution. Hundreds of papers, near-zero practical results. Academic hype trap.",
    tags: ["quantum", "crowded"],
  },
  vqas: {
    id: "vqas",
    name: "Variational Quantum Algorithms (VQAs)",
    shortName: "Variational Quantum",
    x: 0.72,
    y: 0.18,
    category: "Quantum",
    whyItMatters:
      "Near-term quantum algorithms (VQE, QAOA) for chemistry and optimization on noisy hardware.",
    whyItsHard:
      "Barren plateaus make training intractable at scale. Noise destroys signal. Classical simulation of small instances is often faster.",
    overlooked: "Crowded + Stalled",
    startupAngle:
      "⚠️ Was the biggest bet in quantum computing 2018–2023. Now widely seen as a dead end for near-term advantage.",
    tags: ["quantum", "crowded"],
  },
  llm_lit_mining: {
    id: "llm_lit_mining",
    name: "LLM-Based Literature Mining",
    shortName: "LLM Lit Mining",
    x: 0.84,
    y: 0.22,
    category: "Meta-Science",
    whyItMatters:
      "Using GPT/Claude to extract facts from papers, summarize findings, build knowledge bases.",
    whyItsHard:
      "Useful but not differentiated — anyone with API access can do it. Hallucinations are dangerous in science. No real moat.",
    overlooked: "Very Crowded",
    startupAngle:
      "Quickly becomes a feature, not a product. Zero technical moat.",
    tags: ["infrastructure", "crowded"],
  },
  chatbots_sci: {
    id: "chatbots_sci",
    name: "Chatbots for Science Education",
    shortName: "Chatbots Sci Ed",
    x: 0.90,
    y: 0.08,
    category: "Meta-Science",
    whyItMatters:
      "LLM wrappers that answer science questions or tutor students.",
    whyItsHard:
      "Zero technical moat. Commodity LLM application. Every big lab offers this. Not a research problem.",
    overlooked: "Saturated",
    startupAngle:
      "Not a research problem. Commodity LLM application.",
    tags: ["crowded"],
  },

  // ──────── CROSS-CUTTING ────────
  autonomous_wet_labs: {
    id: "autonomous_wet_labs",
    name: "Autonomous Wet Lab Agents",
    shortName: "Autonomous Wet Labs",
    x: 0.15,
    y: 0.88,
    category: "Meta-Science",
    whyItMatters:
      "Close the loop: AI designs experiment → robot executes → AI analyzes → AI redesigns. Compresses years of R&D into weeks.",
    whyItsHard:
      "Robotics + ML + domain knowledge integration. Handling real-world noise, equipment failures. Requires foundation models that understand experimental protocols.",
    overlooked: "Yes",
    startupAngle:
      "Self-driving lab as a service. The AI orchestration layer is the gap. See FutureHouse, but the space is wide open.",
    tags: ["agents", "infrastructure"],
  },
  active_learning: {
    id: "active_learning",
    name: "Active Learning / Design of Experiments",
    shortName: "Active Learning",
    x: 0.12,
    y: 0.45,
    category: "Meta-Science",
    whyItMatters:
      "Experiments are expensive ($10K–$1M each). Intelligently choosing which experiment to run next can save months and millions.",
    whyItsHard:
      'Academically unglamorous. Bayesian optimization is "old." Not publishable in top ML venues.',
    overlooked: "Yes",
    startupAngle:
      "Experiment planning SaaS for biotech labs. Integrate with LIMS, suggest next experiments, learn from results.",
    tags: ["infrastructure", "agents"],
  },
  lab_automation: {
    id: "lab_automation",
    name: "AI for Lab Automation (Routine)",
    shortName: "Lab Automation",
    x: 0.10,
    y: 0.40,
    category: "Meta-Science",
    whyItMatters:
      "Enormous installed base of lab instruments that are badly underutilized. Simple anomaly detection, schedule optimization, and predictive maintenance would save billions.",
    whyItsHard:
      "Not the sexy 'autonomous lab' — just making existing pipetting robots, plate readers, and HPLC systems smarter with basic ML.",
    overlooked: "Very",
    startupAngle:
      "Middleware layer for lab instruments. Low-hanging fruit with clear ROI.",
    tags: ["infrastructure"],
  },
  microscopy: {
    id: "microscopy",
    name: "Microscopy Image Segmentation",
    shortName: "Microscopy Seg",
    x: 0.80,
    y: 0.20,
    category: "Meta-Science",
    whyItMatters:
      "U-Net variants for cell/tissue segmentation. SAM and foundation models handle many cases out-of-the-box.",
    whyItsHard:
      "Largely a solved problem for standard cases. Remaining challenges are domain-specific edge cases.",
    overlooked: "Crowded",
    startupAngle:
      "Low barrier to entry, low defensibility. Standard cases are commoditized.",
    tags: ["infrastructure", "crowded"],
  },
};
