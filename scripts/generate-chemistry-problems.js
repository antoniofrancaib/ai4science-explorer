#!/usr/bin/env node
/**
 * Generates a JSON object of Chemistry/Materials problems with scientifically
 * accurate content. Run: node scripts/generate-chemistry-problems.js
 */

const problems = {
  catalyst_design: {
    definition: "The computational discovery and design of heterogeneous catalysts—materials that accelerate chemical reactions without being consumed—for green chemistry applications such as CO2 reduction, hydrogen evolution, and ammonia synthesis, given target reactions and operating conditions.",
    bottleneck: "Modeling complex electronic structure, reaction intermediates, and surface restructuring at the electrode-electrolyte interface; bridging DFT accuracy with experimental conditions and scalability.",
    currentSota: "OCP (DimeNet++, SchNet on OC20/OC22); CatTSunami (GNN for transition state search, 1500× faster than DFT); ChemReasoner (LLM + GNN); OCx24 experimental validation pipeline.",
    solvedState: "Specify target reaction and conditions → AI outputs catalyst compositions and structures with validated activity, selectivity, and stability. Routine computational catalyst discovery with closed-loop experimental validation.",
    symmetries: ["SE(3) Equivariance", "Periodic Boundary Conditions", "Surface Slab Symmetry", "Adsorbate Permutation Invariance"],
    benchmarks: ["Open Catalyst 2020 (OC20)", "Open Catalyst 2022 (OC22)", "OCx24 (experimental)"],
    papers: [
      { title: "Open Catalyst 2020 (OC20) Dataset and Community Challenges", authors: "Chanussot et al.", year: 2021, link: "https://arxiv.org/abs/2010.09990" },
      { title: "An Artificial Intelligence (AI) workflow for catalyst design and optimization", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2402.04557" },
      { title: "Open Catalyst Experiments 2024 (OCx24): Bridging Experiments and Computational Models", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2411.11783" }
    ]
  },
  csp: {
    definition: "Predicting the three-dimensional packing of molecules into crystalline structures—including space group, unit cell parameters, and atomic positions—from molecular composition, enabling polymorph prediction and materials-by-design.",
    bottleneck: "Exponential search space over space groups and unit cell parameters; modeling periodic boundary conditions; capturing weak intermolecular interactions (dispersion, hydrogen bonding) at quantum accuracy.",
    currentSota: "OXtal (100M param all-atom diffusion, 600K structures); TCSP 2.0 (template-based, 83.89% space-group success); CSPBench methods; CALYPSO (DFT-based); ML potential-based CSP.",
    solvedState: "Given molecular structure → predict experimentally observed crystal forms with correct space group and packing. Reliable polymorph risk assessment for pharma and materials discovery.",
    symmetries: ["Space Group Symmetry (230 groups)", "Periodic Boundary Conditions", "SE(3) on unit cell", "Molecular Conformer Equivariance"],
    benchmarks: ["CSPBench (180 test structures)", "Cambridge Structural Database (CSD)", "CSP blind tests"],
    papers: [
      { title: "OXtal: An All-Atom Diffusion Model for Organic Crystal Structure Prediction", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2512.06987" },
      { title: "CSPBench: A comprehensive benchmark for crystal structure prediction algorithms", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2407.00733" },
      { title: "E(3)-Equivariant Diffusion for Crystal Structure Generation", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2403.15477" }
    ]
  },
  multi_scale_sim: {
    definition: "Bridging simulations across scales—from quantum electronic structure (fs, few atoms) through atomistic MD (ns–μs) and coarse-grained models to cellular/tissue dynamics (ms–hours)—in a coherent, coupled framework.",
    bottleneck: "Different physics, timescales (10^12× span), and representations at each scale; hand-crafted coarse-graining loses crucial detail; no unified ML framework for learning across resolutions.",
    currentSota: "MiMiC (multiscale MPMD framework); million-atom quantum biomolecular simulations (Hartree-Fock on bacteriophages); adaptive VQE-PDFT for electron transfer; fragmentation + QM/MM.",
    solvedState: "Specify system and observables → single framework outputs properties at appropriate scale with automatic resolution selection. Digital twin simulating drug effects from electronic structure to cellular response.",
    symmetries: ["SE(3) Equivariance", "Scale Invariance", "Energy Conservation across handoffs", "Markovian coarse-graining consistency"],
    benchmarks: ["Multi-scale protein folding", "Membrane permeation", "Enzyme catalysis QM/MM", "Bridging quantum to cellular"],
    papers: [
      { title: "Bridging Quantum Mechanics and Biology at the Million-Atom Scale", authors: "Various", year: 2024, link: "https://doi.org/10.21203/rs.3.rs-7327472/v1" },
      { title: "Integrating Quantum Computing with Multiconfiguration Pair-Density Functional Theory for Biological Electron Transfer", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2508.07359" },
      { title: "Multiscale quantum algorithms for quantum chemistry", authors: "Various", year: 2023, link: "https://doi.org/10.1039/D2SC06875C" }
    ]
  },
  dft_surrogates: {
    definition: "Machine learning models that replace expensive density functional theory (DFT) or coupled-cluster [CCSD(T)] calculations for predicting electronic structure, total energies, forces, and molecular properties at near-quantum accuracy.",
    bottleneck: "Generalization across chemical space; capturing electron correlation and orbital symmetries; transferability to out-of-distribution compositions; balancing accuracy vs. speed.",
    currentSota: "MACE, NequIP, SchNet, DimeNet++ on OC20/OC22; CHGNet (materials); NewtonNet (Hessians); transfer learning and fine-tuning for new chemistries.",
    solvedState: "Predict energies, forces, and properties for arbitrary molecules/materials at CCSD(T)-like accuracy in milliseconds. Computational chemistry as a routine, cloud-hosted service.",
    symmetries: ["SE(3) Equivariance", "Permutation Invariance (atoms)", "Orbital Symmetry", "Gauge Invariance (electronic)"],
    benchmarks: ["Open Catalyst 2020 (OC20)", "rMD17", "3BPA", "QM9", "Materials Project"],
    papers: [
      { title: "MACE: Higher Order Equivariant Message Passing Neural Networks for Fast and Accurate Force Fields", authors: "Batatia et al.", year: 2022, link: "https://arxiv.org/abs/2206.07697" },
      { title: "E(3)-Equivariant Graph Neural Networks for Data-Efficient and Accurate Interatomic Potentials", authors: "Batzner et al.", year: 2021, link: "https://arxiv.org/abs/2101.03164" },
      { title: "SchNet – A deep learning architecture for molecules and materials", authors: "Schütt et al.", year: 2017, link: "https://doi.org/10.1063/1.5019779" }
    ]
  },
  battery_materials: {
    definition: "Discovering and optimizing electrode materials, electrolytes, and solid-state conductors for next-generation batteries—optimizing capacity, ionic conductivity, electrochemical stability, and cost.",
    bottleneck: "Multi-objective optimization under conflicting constraints; modeling electrochemical interfaces and ion transport; predicting lifetime and degradation; bridging computation to synthesis and cycling performance.",
    currentSota: "Discovery Learning (active + zero-shot for lifetime); CHGNet + DFT screening for Li-ion conductors; DRXNet for cathode electrochemistry; iterative active learning for optimization.",
    solvedState: "Specify performance targets → AI proposes materials validated in lab with target capacity, stability, and conductivity. Routine computational discovery for solid-state and beyond-Li batteries.",
    symmetries: ["SE(3) Equivariance", "Periodic Boundary Conditions", "Composition Permutation", "Ion Transport Symmetry"],
    benchmarks: ["Materials Project (battery explorer)", "AFLOW", "Li-ion conductor screening", "Battery lifetime prediction"],
    papers: [
      { title: "Discovery Learning accelerates battery design evaluation", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2508.06985" },
      { title: "Deep learning of experimental electrochemistry for battery cathodes across diverse compositions", authors: "Various", year: 2023, link: "https://arxiv.org/abs/2304.04986" },
      { title: "Hierarchical high-throughput screening of alkaline-stable lithium-ion conductors combining machine learning and first-principles calculations", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2511.20964" }
    ]
  },
  ml_force_fields: {
    definition: "Learning interatomic potentials (force fields) from ab initio data to enable molecular dynamics at near-DFT accuracy but 10^4–10^6× faster, for drug binding, protein dynamics, and materials simulation.",
    bottleneck: "Generalization to unseen chemistries; long-range electrostatics; stability over long MD trajectories (error accumulation); data efficiency; training data cost.",
    currentSota: "MACE (higher-order equivariant MPNN); NequIP (E(3)-equivariant); SchNet; CHGNet (charge-informed); Allegro; ACE; ViSNet.",
    solvedState: "Universal force field for arbitrary chemistry: nanosecond MD at DFT accuracy, stable over microsecond scales. Production-grade platform for virtual screening and materials simulation.",
    symmetries: ["SE(3) Equivariance", "Permutation Invariance", "Energy Conservation", "Virial Stress Symmetry"],
    benchmarks: ["rMD17", "3BPA", "AcAc", "Open Catalyst 2020 (OC20)", "ISO17"],
    papers: [
      { title: "MACE: Higher Order Equivariant Message Passing Neural Networks for Fast and Accurate Force Fields", authors: "Batatia et al.", year: 2022, link: "https://arxiv.org/abs/2206.07697" },
      { title: "E(3)-Equivariant Graph Neural Networks for Data-Efficient and Accurate Interatomic Potentials", authors: "Batzner et al.", year: 2021, link: "https://arxiv.org/abs/2101.03164" },
      { title: "CHGNet: Pretrained universal neural network potential for charge-informed atomistic modeling", authors: "Deng et al.", year: 2023, link: "https://arxiv.org/abs/2302.14231" }
    ]
  },
  polymer_design: {
    definition: "Designing polymers with target properties—mechanical, thermal, conductive, degradability—by predicting structure-property relationships from repeat units, chain architecture, and degree of polymerization.",
    bottleneck: "Long-range chain statistics and morphology; lack of standardized polymer representations; scarcity of property data; capturing solvation and processing effects.",
    currentSota: "polyBART (PSELFIES language model); OPoly26 dataset (6.57M DFT calculations); SPACIER (MD + Bayesian optimization); graph neural networks for repeat-unit property prediction.",
    solvedState: "Specify target properties → AI outputs polymer architectures with validated performance. Routine generative design for sustainable packaging, advanced materials, drug delivery.",
    symmetries: ["Graph Isomorphism (repeat units)", "Sequence Permutation (monomer order)", "Chain Length Scaling", "Architecture Invariance"],
    benchmarks: ["OPoly26", "Polymer property prediction", "Experimental validation (e.g., Tg, modulus)"],
    papers: [
      { title: "The Open Polymers 2026 (OPoly26) Dataset and Evaluations", authors: "Various", year: 2026, link: "https://arxiv.org/abs/2512.23117" },
      { title: "SPACIER: On-Demand Polymer Design with Fully Automated All-Atom Classical Molecular Dynamics Integrated into Machine Learning Pipelines", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2408.05135" },
      { title: "polyBART: Bidirectional Autoregressive Transformers for polymer property prediction and design", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2210.07239" }
    ]
  },
  mof_design: {
    definition: "Designing metal-organic frameworks (MOFs)—porous crystalline materials of metal nodes and organic linkers—for gas capture, storage, separation, and catalysis by optimizing topology, pore size, and stability.",
    bottleneck: "Combinatorial design space of linkers and nodes; predicting stability, porosity, and gas uptake simultaneously; synthesisability; high-throughput characterization.",
    currentSota: "MOFGPT (transformer + RL for generation); MOFGen (agentic AI, 5 synthesized MOFs); MOF-LLM (block-level prediction); CGCNN/MOFFormer for property prediction.",
    solvedState: "Specify gas targets (CO2, H2, etc.) → AI designs MOFs with validated uptake and stability. Routine AI-driven MOF discovery for carbon capture and hydrogen storage.",
    symmetries: ["Space Group Symmetry", "Periodic Boundary Conditions", "Linker/Node Permutation", "Pore Topology Invariance"],
    benchmarks: ["CoRE MOF database", "Gas uptake prediction (CO2, CH4)", "Stability prediction", "Synthesisability"],
    papers: [
      { title: "MOFGPT: Generative Design of Metal-Organic Frameworks using Language Models", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2506.00198" },
      { title: "System of Agentic AI for the Discovery of Metal-Organic Frameworks", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2504.14110" },
      { title: "Property-guided Inverse Design of Metal-Organic Frameworks Using Quantum Natural Language Processing", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2405.11783" }
    ]
  },
  retrosynthesis: {
    definition: "Given a target molecule, identify viable multi-step synthetic routes from commercially available starting materials, including reaction feasibility, selectivity, yields, and strategic planning over long routes.",
    bottleneck: "Strategic planning over many steps; modeling real-world constraints (availability, cost, safety); one-step model accuracy; generalizing to novel chemistries not in training data.",
    currentSota: "RetroChimera (ensemble); DMS Explorer XL (transformer, multistep); Double-Ended Synthesis Planning (DESP); template-based and template-free approaches; GPT-4/ChemCrow for planning.",
    solvedState: "Input target → output validated synthetic route executable in lab. AI synthesis planner integrated with robotic chemistry; routine autonomous molecule synthesis.",
    symmetries: ["Graph Isomorphism (molecules)", "Reaction Center Equivariance", "Retrosynthetic Disconnection Permutation"],
    benchmarks: ["USPTO", "Retrosynthesis benchmarks", "FDA drug route prediction", "One-step accuracy / solve rate"],
    papers: [
      { title: "RetroChimera: Learning-based ensemble retrosynthesis", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2412.05269" },
      { title: "Double-Ended Synthesis Planning with Goal-Conditioned Cost Networks", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2407.06334" },
      { title: "Site-specific template generative approach for retrosynthetic planning", authors: "Various", year: 2024, link: "https://doi.org/10.1038/s41467-024-52048-4" }
    ]
  },
  semiconductor_design: {
    definition: "Designing novel semiconductor materials with tailored band gap, carrier mobility, and thermal properties for electronics, photovoltaics, and optoelectronics—including perovskites, oxides, and 2D materials.",
    bottleneck: "Accurate electronic structure for defects and interfaces; manufacturing constraints (synthesizability, stability); multi-objective optimization of conflicting properties.",
    currentSota: "CGCNN on Materials Project; DFT-ML pipelines for bandgap/stability; PU learning for synthesizability; POLARIS (LLM-assisted perovskite optimization).",
    solvedState: "Specify target bandgap and application → AI proposes synthesizable semiconductors with validated properties. Routine discovery for next-gen chips and solar cells.",
    symmetries: ["Space Group Symmetry", "Periodic Boundary Conditions", "Composition Permutation", "Defect Symmetry"],
    benchmarks: ["Materials Project", "OQMD", "Perovskite stability/bandgap", "Synthesizability prediction"],
    papers: [
      { title: "Bridging the Synthesizability Gap in Perovskites by Combining Computations, Literature Data, and PU Learning", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2510.06166" },
      { title: "Opportunities for Machine Learning to Accelerate Halide Perovskite Commercialization and Scale-Up", authors: "Various", year: 2021, link: "https://arxiv.org/abs/2110.03923" },
      { title: "Crystal Graph Convolutional Neural Networks for Accurate and Interpretable Prediction of Material Properties", authors: "Xie & Grossman", year: 2018, link: "https://doi.org/10.1103/PhysRevLett.120.145301" }
    ]
  },
  reaction_mechanisms: {
    definition: "Predicting reaction mechanisms—elementary steps, transition states, intermediates, and minimum-energy pathways—for organic and catalytic reactions from reactant and product structures.",
    bottleneck: "Transition state search is expensive; multiple competing pathways; rare events on high-dimensional energy surfaces; transferability to out-of-distribution reactions.",
    currentSota: "ReactAIvate (GNN for mechanism classification); NewtonNet (ML Hessians for TS optimization); adaptive TS refinement with learned flows; MEPIN (minimum-energy path prediction).",
    solvedState: "Input reactants and products → output complete mechanism with TS structures and barriers. Automated mechanism elucidation for process optimization and safety assessment.",
    symmetries: ["SE(3) Equivariance", "Permutation Invariance", "Reaction Coordinate Symmetry", "Path Degeneracy"],
    benchmarks: ["TS optimization success rate", "Barrier height MAE", "Reaction pathway datasets"],
    papers: [
      { title: "ReactAIvate: A Deep Learning Approach to Predicting Reaction Mechanisms and Unmasking Reactivity Hotspots", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2407.10090" },
      { title: "Deep Learning of ab initio Hessians for Transition State Optimization", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2405.02247" },
      { title: "Adaptive Transition State Refinement with Learned Equilibrium Flows", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2507.16521" }
    ]
  },
  electrochemistry: {
    definition: "Modeling electrode-electrolyte interfaces—double layer structure, capacitance, potentials of zero charge, and electrocatalytic activation barriers—coupling electronic structure with solvation and applied potential.",
    bottleneck: "Coupling electronic structure with implicit/explicit solvent, ions, and applied bias; interfacial capacitance and nonlinear effects; multi-scale (DFT to continuum).",
    currentSota: "Joint DFT (JDFT); implicit electrolyte models in VASP; Molecular Density Functional Theory (MDFT) for solvent; NESS model for capacitance; continuum-embedded linear-scaling DFT.",
    solvedState: "Predict interfacial structure, capacitance, and activation barriers at arbitrary potential. Routine first-principles electrochemistry for battery and fuel cell design.",
    symmetries: ["Periodic Boundary Conditions", "Electrode Surface Symmetry", "Solvent Permutation", "Potential Symmetry"],
    benchmarks: ["Differential capacitance curves", "Potentials of zero charge", "Activation barriers (HER, OER)"],
    papers: [
      { title: "Joint Density-Functional Theory of the Electrode-Electrolyte Interface", authors: "Sundararaman et al.", year: 2012, link: "https://arxiv.org/abs/1205.0526" },
      { title: "Ions at electrochemical interfaces: from explicit to implicit molecular solvent descriptions", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2503.11361" },
      { title: "Improving Accuracy of Electrochemical Capacitance and Solvation Energetics in First-Principles Calculations", authors: "Various", year: 2018, link: "https://arxiv.org/abs/1801.07705" }
    ]
  },
  photovoltaics: {
    definition: "Designing photovoltaic materials—perovskites, organic PV, and other absorbers—with optimal band gap, charge transport, stability, and manufacturing cost for solar energy conversion.",
    bottleneck: "Multi-objective optimization (efficiency vs. stability vs. cost); degradation pathways; synthesizability; predicting performance under operational conditions.",
    currentSota: "CGCNN + DFT screening (npj Comput. Mater.); ML for bandgap/stability (lead-free perovskites); additive screening (molecular representation learning); PU learning for synthesizability.",
    solvedState: "Specify efficiency targets → AI proposes synthesizable PV materials with validated PCE and stability. Routine discovery for next-gen solar cells.",
    symmetries: ["Space Group Symmetry", "Composition Permutation", "Band Structure Symmetry"],
    benchmarks: ["Materials Project", "Perovskite bandgap/stability", "Device PCE prediction", "Synthesizability"],
    papers: [
      { title: "Machine learning-enabled chemical space exploration of all-inorganic perovskites for photovoltaics", authors: "Various", year: 2024, link: "https://doi.org/10.1038/s41524-024-01270-1" },
      { title: "Opportunities for Machine Learning to Accelerate Halide Perovskite Commercialization and Scale-Up", authors: "Various", year: 2021, link: "https://arxiv.org/abs/2110.03923" },
      { title: "Molecular representation learning for perovskite additive screening", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2412.14109" }
    ]
  },
  formulation_design: {
    definition: "Optimizing pharmaceutical formulations—excipients, API loading, particle size, and dosage form—to achieve target bioavailability, stability, release kinetics, and patient compliance.",
    bottleneck: "Complex mixtures with many excipients; phase behavior and stability depend on subtle interactions; very little systematic, high-quality data; bridging in silico to manufacturing.",
    currentSota: "Generative AI for digital formulation (structure synthesis from images); FormuLLA (LLM for FDM formulations); PILLTOP (topology optimization for polypills); ML for nanomedicine formulations.",
    solvedState: "Specify API and target CQA → AI outputs formulation with validated performance. Reduce time-to-formulation from months to days; routine AI-driven formulation optimization.",
    symmetries: ["Composition Permutation (excipients)", "Scale Invariance (concentration)", "Processing Parameter Invariance"],
    benchmarks: ["Percolation threshold prediction", "Release kinetics", "Stability assays", "Formulation datasets"],
    papers: [
      { title: "In silico formulation optimization and particle engineering of pharmaceutical products using a generative artificial intelligence structure synthesis method", authors: "Various", year: 2024, link: "https://doi.org/10.1038/s41467-024-54011-9" },
      { title: "FormuLLA: Fine-tuned Large Language Models for 3D-Printed Pharmaceutical Formulation Recommendations", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2601.02071" },
      { title: "Unleashing the power of machine learning in nanomedicine formulation development", authors: "Various", year: 2024, link: "https://chemrxiv.org/engage/chemrxiv/article-details/67ceadecfa469535b9b3e2b2" }
    ]
  }
};

console.log(JSON.stringify(problems, null, 0));
