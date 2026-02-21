import { Problem } from "@/types";

export const allProblems: Record<string, Problem> = {
  // ──────── BIOMOLECULES & MEDICINE ────────
  idps: {
    id: "idps",
    name: "Intrinsically Disordered Proteins (IDPs)",
    shortName: "IDPs / Ensembles",
    x: 0.15,
    y: 0.90,
    z: 0.82,
    category: "Biology",
    whyItMatters:
      "~30% of human proteins are disordered. They drive cancer signaling, neurodegeneration, viral entry. AlphaFold cannot model them — it forces a single static structure.",
    whyItsHard:
      "IDPs occupy an ensemble of conformations. You need generative models over distributions, not point predictions. Requires dynamics-aware architectures on SE(3).",
    overlooked: "Very",
    startupAngle:
      'A "Boltzmann AlphaFold" for conformational ensembles → drug targets currently considered "undruggable." Massive pharma demand.',
    tags: ["generative", "biology", "molecular", "drug-discovery"],
    definition:
      "Rigorously predicting the conformational ensemble of intrinsically disordered proteins (IDPs) and regions (IDRs) that lack a single stable tertiary structure, given only amino acid sequence.",
    bottleneck:
      "Generating physically realistic distributions over conformations rather than point predictions; avoiding mode collapse in high-dimensional conformational space.",
    currentSota:
      "ALBATROSS predicts ensemble dimensions from sequence at proteome scale; idpGAN generates conformational ensembles via GAN; coarse-grained MD + ML for human proteome IDR ensembles.",
    solvedState:
      "Given any IDP sequence, generate an experimentally validated conformational ensemble (Rg, end-to-end, contact maps) at negligible cost. Reliable drug target identification for disordered regions.",
    symmetries: ["SE(3) Equivariance", "Permutation Invariance (sequence)", "Rotational Invariance"],
    benchmarks: ["Protein Ensemble Database (PED)", "Human IDR proteome benchmarks", "ALBATROSS validation set"],
    papers: [
      { title: "Direct prediction of intrinsically disordered protein conformational properties from sequence", authors: "Tesei et al.", year: 2023, link: "https://doi.org/10.1038/s41592-023-02159-5" },
      { title: "Direct generation of protein conformational ensembles via machine learning", authors: "Stark et al.", year: 2023, link: "https://doi.org/10.1038/s41467-023-36443-x" },
      { title: "Machine learning methods to study disordered proteins", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2410.15940" },
    ],
  },
  prog_biology: {
    id: "prog_biology",
    name: "Programmable Biology / Genetic Circuits",
    shortName: "Prog Biology",
    x: 0.08,
    y: 0.96,
    z: 0.88,
    category: "Biology",
    whyItMatters:
      "Design cells that sense, compute, and actuate — living therapeutics, biosensors, biomanufacturing.",
    whyItsHard:
      "Combinatorial design space. Circuit behavior is context-dependent (host, growth conditions). No good generative models for genetic regulatory networks.",
    overlooked: "Very",
    startupAngle:
      'A foundation model for gene regulation → design-to-order cell therapies. Think "compiler for biology."',
    tags: ["generative", "biology", "synthetic-biology"],
    definition:
      "Computationally designing genetic circuits (promoters, regulators, ribosome binding sites) that implement desired input-output behaviors in living cells.",
    bottleneck:
      "Modeling the relationship between DNA sequence, circuit topology, and emergent behavior; capturing host and environmental context dependence.",
    currentSota:
      "CircuitVAE for latent circuit optimization; BioDiscoveryAgent uses LLMs for perturbation experiment design; GenAI-Net for CRN design with simulation-based evaluation.",
    solvedState:
      "Specify desired behavior (logic gate, oscillator, dose-response) → AI outputs validated genetic circuit designs that work in target host. Reliable design-build-test in silico.",
    symmetries: ["Graph Isomorphism (circuit topology)", "Sequence Permutation (within parts)"],
    benchmarks: ["Logic gate implementations", "Oscillator design", "Dose-response circuits"],
    papers: [
      { title: "CircuitVAE: Efficient and Scalable Latent Circuit Optimization", authors: "Hajjahmad et al.", year: 2024, link: "https://arxiv.org/abs/2406.09535" },
      { title: "BioDiscoveryAgent: An AI Agent for Designing Genetic Perturbation Experiments", authors: "Li et al.", year: 2024, link: "https://arxiv.org/abs/2405.17631" },
      { title: "GenAI-Net: Generative AI for chemical reaction network design", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2601.17582" },
    ],
  },
  protein_codesign: {
    id: "protein_codesign",
    name: "Protein Co-Design (Structure + Sequence)",
    shortName: "Protein Co-Design",
    x: 0.44,
    y: 0.86,
    z: 0.65,
    category: "Biology",
    whyItMatters:
      "Joint generation of backbone geometry and amino acid sequence, rather than pipeline approaches (design structure → inverse fold).",
    whyItsHard:
      "Requires modeling discrete (sequence) and continuous (3D coordinates) spaces simultaneously with SE(3) equivariance. Manifold Jacobian corrections, CTMC + flow coupling.",
    overlooked: "Medium",
    startupAngle:
      "End-to-end protein engineering platform → enzymes, binders, therapeutics designed from scratch with guaranteed foldability.",
    tags: ["generative", "biology", "molecular", "drug-discovery"],
    definition:
      "Jointly generating protein backbone 3D structure and amino acid sequence in a single forward pass, rather than sequential design-then-inverse-fold pipelines.",
    bottleneck:
      "Coupling discrete sequence generation with continuous 3D coordinates; maintaining local/global geometric consistency and foldability.",
    currentSota:
      "NAEPro/FG (functional geometry guidance); FoldFlow-2 (sequence-augmented SE(3)-flow matching); GeoPro for motif-based co-design; equivariant translation at ICLR.",
    solvedState:
      "Condition on functional motif or binding site → output novel sequence-structure pairs that fold, express, and perform target function. One-shot design with experimental validation.",
    symmetries: ["SE(3) Equivariance", "Permutation Invariance (sequence)", "Roto-Translation Invariance"],
    benchmarks: ["β-lactamase design", "Myoglobin design", "Scaffolding benchmarks"],
    papers: [
      { title: "Functional Geometry Guided Protein Sequence and Backbone Structure Co-Design", authors: "Song et al.", year: 2023, link: "https://arxiv.org/abs/2310.04343" },
      { title: "Sequence-Augmented SE(3)-Flow Matching For Conditional Protein Backbone Generation", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2405.20313" },
      { title: "Joint design of protein sequences and structures", authors: "Various", year: 2022, link: "https://arxiv.org/abs/2210.08761" },
    ],
  },
  rna_therapeutics: {
    id: "rna_therapeutics",
    name: "RNA Therapeutics Design",
    shortName: "RNA Therapeutics",
    x: 0.20,
    y: 0.78,
    z: 0.58,
    category: "Biology",
    whyItMatters:
      "mRNA vaccines proved the modality. But designing optimal RNA sequences (stability, secondary structure, immunogenicity) remains largely empirical.",
    whyItsHard:
      "RNA structure prediction is harder than protein folding (flexible, pseudoknots, tertiary contacts). Inverse folding for RNA is nascent.",
    overlooked: "Yes",
    startupAngle:
      "AI-designed mRNA/RNA therapeutics with optimized delivery, stability, and expression. Next-gen vaccine and gene therapy platform.",
    tags: ["generative", "biology", "drug-discovery"],
    definition:
      "Designing RNA sequences (mRNA, siRNAs, etc.) that optimize translational efficiency, stability, secondary structure, and immunogenicity for therapeutic applications.",
    bottleneck:
      "Joint optimization of conflicting objectives (expression vs immunogenicity vs structure); RNA inverse folding lags protein; pseudoknots and tertiary structure.",
    currentSota:
      "RNAdiffusion for controllable RNA generation; RNop for multi-objective mRNA optimization; LinearDesign for ensemble free energy; RiboDecode for codon optimization.",
    solvedState:
      "Input target protein → output optimized mRNA sequence with maximized expression, minimal immunogenicity, validated in vitro. Routine AI-driven mRNA design.",
    symmetries: ["Sequence Permutation (base pairing)", "Structural Motif Invariance"],
    benchmarks: ["5′-UTR design", "Codon optimization benchmarks", "Translation efficiency assays"],
    papers: [
      { title: "RNAdiffusion: Controllable RNA sequence generation with latent diffusion", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2409.09828" },
      { title: "A New Deep-learning-Based Approach For mRNA Optimization", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2505.23862" },
      { title: "Deep generative optimization of mRNA codon sequences for enhanced translation", authors: "Various", year: 2025, link: "https://doi.org/10.1038/s41467-025-64894-x" },
    ],
  },
  genomics_fms: {
    id: "genomics_fms",
    name: "Foundation Models for Genomics",
    shortName: "Genomics FMs",
    x: 0.36,
    y: 0.82,
    z: 0.48,
    category: "Biology",
    whyItMatters:
      'Predict gene expression, regulatory effects, and variant pathogenicity from raw DNA. The "GPT moment" for biology.',
    whyItsHard:
      "Genomes are ~3B bp long. Context windows, tokenization of continuous signals (epigenomics), and lack of labels at scale. Multi-species transfer is unsolved.",
    overlooked: "Medium",
    startupAngle:
      "Precision medicine: predict patient-specific drug response, disease risk, and optimal intervention from whole-genome data.",
    tags: ["foundation-models", "biology", "genomics"],
    definition:
      "Large-scale pre-trained models that take raw DNA sequence as input and predict gene expression, regulatory effects, variant impact, and phenotype across molecular to genome scale.",
    bottleneck:
      "Context length vs genome size; integrating epigenomic modalities; multi-species generalization; labeled data scarcity at scale.",
    currentSota:
      "Evo (7B params, 131k context, prokaryotic/phage); Enformer for expression; Nucleotide Transformer; dnaHNet; HyenaDNA.",
    solvedState:
      "Whole-genome input → accurate expression, variant pathogenicity, regulatory maps for any species. Zero-shot generalization to new organisms and conditions.",
    symmetries: ["Reverse Complement Invariance", "Translation Invariance (position)"],
    benchmarks: ["Enformer benchmarks", "Variant effect prediction", "Expression QTL", "OpenGenome"],
    papers: [
      { title: "Sequence modeling and design from molecular to genome scale with Evo", authors: "Neville et al.", year: 2024, link: "https://doi.org/10.1101/2024.02.27.582234" },
      { title: "Effective gene expression prediction from sequence by integrating long-range interactions", authors: "Avsec et al.", year: 2021, link: "https://doi.org/10.1038/s41592-021-01252-x" },
      { title: "Nucleotide Transformer: building and evaluating robust foundation models for human genomics", authors: "Dalla-Torre et al.", year: 2024, link: "https://doi.org/10.1038/s41592-024-02523-z" },
    ],
  },
  antibody_design: {
    id: "antibody_design",
    name: "Antibody Design",
    shortName: "Antibody Design",
    x: 0.68,
    y: 0.80,
    z: 0.44,
    category: "Biology",
    whyItMatters:
      "Antibodies are the fastest-growing drug class ($200B+ market). Designing them computationally can cut discovery timelines from years to weeks.",
    whyItsHard:
      "CDR loop modeling requires extreme precision. Binding affinity prediction is noisy. Need to co-optimize binding, stability, developability, and immunogenicity.",
    overlooked: "Medium-Crowded",
    startupAngle:
      "AI-first antibody discovery platform. Several exist (Absci, Generate Bio) but the design accuracy gap remains wide.",
    tags: ["generative", "biology", "drug-discovery"],
    definition:
      "Computationally designing antibody sequences (especially CDR loops) that bind a target antigen with high affinity, stability, and developability.",
    bottleneck:
      "CDR-H3 conformational diversity; accurate binding affinity prediction; balancing affinity, stability, immunogenicity, and manufacturability.",
    currentSota:
      "IgDesign (inverse folding + ESM2, in vitro validated); DiffAb and energy-based preference optimization; Cross-Gate MLP for one-shot CDR design.",
    solvedState:
      "Input antigen structure → output antibody sequences that bind with validated affinity. High hit rate in experimental screening. Routine computational antibody discovery.",
    symmetries: ["SE(3) Equivariance", "Chain Permutation (heavy/light)", "CDR Canonical Class Invariance"],
    benchmarks: ["RAbD", "AbBiBench", "SAbDab"],
    papers: [
      { title: "IgDesign: In vitro validated antibody design against multiple therapeutic antigens using inverse folding", authors: "Absci et al.", year: 2023, link: "https://doi.org/10.1101/2023.12.08.570889" },
      { title: "Antigen-Specific Antibody Design via Direct Energy-based Preference Optimization", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2403.16576" },
      { title: "Cross-Gate MLP with Protein Complex Invariant Embedding Is a One-Shot Antibody Designer", authors: "Various", year: 2023, link: "https://arxiv.org/abs/2305.09480" },
    ],
  },
  single_cell_fms: {
    id: "single_cell_fms",
    name: "Single-Cell Foundation Models",
    shortName: "Single-Cell FMs",
    x: 0.28,
    y: 0.74,
    z: 0.4,
    category: "Biology",
    whyItMatters:
      "Model cellular states and transitions at single-cell resolution. Critical for understanding development, disease, and drug response.",
    whyItsHard:
      "Extreme sparsity and noise in scRNA-seq data. Batch effects. Need to capture continuous cell state trajectories and rare cell types.",
    overlooked: "Medium",
    startupAngle:
      "Cell atlas intelligence platform — predict drug effects at single-cell resolution for patient stratification.",
    tags: ["foundation-models", "biology", "genomics"],
    definition:
      "Foundation models pre-trained on single-cell omics (scRNA-seq, scATAC-seq, CITE-seq) that generalize to cell annotation, batch integration, perturbation prediction, and trajectory inference.",
    bottleneck:
      "Sparsity and dropout in count data; batch effect removal while preserving biology; modeling continuous cell states and rare populations.",
    currentSota:
      "scGPT (33M cells, multi-omics); GeneFormer; scBERT; SCEPTRE; single-cell transformers for perturbation response.",
    solvedState:
      "Zero-shot cell type annotation, batch integration, and perturbation prediction across tissues and conditions. Unified representation for any single-cell dataset.",
    symmetries: ["Gene Permutation Invariance", "Cell Permutation Invariance", "Batch Augmentation"],
    benchmarks: ["Cell type annotation accuracy", "Batch integration LISI", "Perturbation prediction AUROC"],
    papers: [
      { title: "scGPT: toward building a foundation model for single-cell multi-omics using generative AI", authors: "Cui et al.", year: 2024, link: "https://doi.org/10.1038/s41592-024-02201-0" },
      { title: "scGPT: Towards Building a Foundation Model for Single-Cell Multi-omics", authors: "Cui et al.", year: 2023, link: "https://doi.org/10.1101/2023.04.30.538439" },
      { title: "GeneFormer: Learned gene compression for single-cell analysis", authors: "Theodoris et al.", year: 2023, link: "https://doi.org/10.1038/s41586-023-05954-4" },
    ],
  },
  protein_protein_int: {
    id: "protein_protein_int",
    name: "Protein-Protein Interactions",
    shortName: "Protein-Protein Int",
    x: 0.32,
    y: 0.66,
    z: 0.45,
    category: "Biology",
    whyItMatters:
      "Most biological functions are mediated by protein complexes. Predicting which proteins interact and how is fundamental to drug design.",
    whyItsHard:
      "Combinatorial explosion of possible pairs. Transient interactions are hard to capture. AlphaFold-Multimer helps but accuracy drops for transient/weak interactions.",
    overlooked: "Medium",
    startupAngle:
      "Interactome mapping platform for target discovery — predict druggable PPIs and design molecules that modulate them.",
    tags: ["biology", "molecular", "drug-discovery"],
    definition:
      "Predicting whether two proteins interact and, if so, the 3D structure of the complex. Includes both interaction propensity and pose/structure prediction.",
    bottleneck:
      "Distinguishing true interactions from false positives at scale; modeling transient and weak interactions; confidence calibration for proteome-wide screens.",
    currentSota:
      "AlphaFold-Multimer, AlphaFold 3 for biomolecular interactions; SPOC classifier for filtering true vs false positives; AFProfile MSA denoising; DiffDock-PP for rigid docking.",
    solvedState:
      "Proteome-wide PPI prediction with reliable confidence. Accurate structures for transient complexes. Routine identification of druggable interaction interfaces.",
    symmetries: ["SE(3) Equivariance", "Chain Permutation (A-B symmetry)", "Interface Symmetry"],
    benchmarks: ["DIPS", "PDB multimers", "Predictomes", "CASP multi-chain"],
    papers: [
      { title: "Accurate structure prediction of biomolecular interactions with AlphaFold 3", authors: "Abramson et al.", year: 2024, link: "https://doi.org/10.1038/s41586-024-07487-w" },
      { title: "Enhanced Protein-Protein Interaction Discovery via AlphaFold-Multimer", authors: "Various", year: 2024, link: "https://doi.org/10.1101/2024.02.19.580970" },
      { title: "Predictomes: A classifier-curated database of AlphaFold-modeled protein-protein interactions", authors: "Various", year: 2024, link: "https://doi.org/10.1101/2024.04.09.588596" },
    ],
  },
  enzyme_engineering: {
    id: "enzyme_engineering",
    name: "Enzyme Engineering",
    shortName: "Enzyme Engineering",
    x: 0.22,
    y: 0.62,
    z: 0.52,
    category: "Biology",
    whyItMatters:
      "Enzymes catalyze reactions with exquisite specificity. Engineering them enables green chemistry, biomanufacturing, and novel therapeutics.",
    whyItsHard:
      "Activity and stability are often at odds. Directed evolution is slow. ML models need to predict function from sequence, not just structure.",
    overlooked: "Medium",
    startupAngle:
      "AI-guided enzyme optimization platform for industrial biotechnology — faster than directed evolution by orders of magnitude.",
    tags: ["generative", "biology", "molecular"],
    definition:
      "Designing or optimizing enzyme sequences to achieve desired catalytic activity, selectivity, and stability for a target reaction and substrate.",
    bottleneck:
      "Predicting function (kcat, Km, selectivity) from sequence; capturing reaction chemistry and transition states; activity-stability trade-offs.",
    currentSota:
      "EnzyGen for generative enzyme design; CLIPZyme for reaction-conditioned virtual screening; CatPred for kinetic parameter prediction; active learning for sequence-activity mapping.",
    solvedState:
      "Input: reaction + substrate. Output: enzyme sequences with predicted and validated activity. Replace directed evolution with in silico design for most enzyme families.",
    symmetries: ["SE(3) Equivariance", "Active Site Invariance", "Reaction Center Equivariance"],
    benchmarks: ["EnzyBench", "kcat/Km prediction", "Catalytic activity assays"],
    papers: [
      { title: "Generative Enzyme Design Guided by Functionally Important Sites and Small-Molecule Substrates", authors: "Song et al.", year: 2024, link: "https://arxiv.org/abs/2405.08205" },
      { title: "CLIPZyme: Reaction-Conditioned Virtual Screening of Enzymes", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2402.06748" },
      { title: "CatPred: A comprehensive framework for deep learning in vitro enzyme kinetic parameters", authors: "Various", year: 2024, link: "https://doi.org/10.1101/2024.03.10.584340" },
    ],
  },
  microbiome_eng: {
    id: "microbiome_eng",
    name: "Microbiome Engineering",
    shortName: "Microbiome Eng",
    x: 0.10,
    y: 0.56,
    z: 0.75,
    category: "Biology",
    whyItMatters:
      "The gut microbiome influences metabolism, immunity, and neurological function. Engineering it could treat IBD, obesity, depression.",
    whyItsHard:
      "Ecosystems of thousands of interacting species. Personalized — varies across individuals. Longitudinal dynamics are poorly understood.",
    overlooked: "Very",
    startupAngle:
      "Computational microbiome design platform — predict community compositions that optimize health outcomes.",
    tags: ["biology", "synthetic-biology"],
    definition:
      "Designing synthetic microbial communities (syncoms) or interventions that achieve desired ecosystem-level outcomes (pathogen clearance, metabolite production, health restoration).",
    bottleneck:
      "Modeling multi-species dynamics; inferring mechanisms from compositional data; personalization; bridging in silico design to in vivo efficacy.",
    currentSota:
      "Bayesian-guided synthetic microbiome design; RNN + Bayesian experimental design for community optimization; DBTL+ statistical design; SynCom15 for pathogen clearance.",
    solvedState:
      "Specify health outcome → AI designs strain compositions (presence/absence, doses) validated in preclinical models. Personalized microbiome therapeutics.",
    symmetries: ["Species Permutation (within functional groups)", "Composition Invariance"],
    benchmarks: ["Pathogen clearance models", "Metabolite production", "Community stability"],
    papers: [
      { title: "Bayesian-Guided Generation of Synthetic Microbiomes with Minimized Pathogenicity", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2405.00070" },
      { title: "Integrating a tailored recurrent neural network with Bayesian experimental design to optimize microbial community functions", authors: "Various", year: 2023, link: "https://doi.org/10.1371/journal.pcbi.1011436" },
      { title: "Statistical design of a synthetic microbiome that clears a multi-drug resistant gut pathogen", authors: "Various", year: 2024, link: "https://doi.org/10.1101/2024.02.28.582635" },
    ],
  },
  vaccine_design: {
    id: "vaccine_design",
    name: "Vaccine Design",
    shortName: "Vaccine Design",
    x: 0.18,
    y: 0.50,
    z: 0.5,
    category: "Biology",
    whyItMatters:
      "COVID proved the power of rapid vaccine design. AI could accelerate antigen selection, adjuvant optimization, and immune response prediction.",
    whyItsHard:
      "Immune system modeling is incredibly complex. Epitope prediction has high false positive rates. Animal-to-human translation is unreliable.",
    overlooked: "Yes",
    startupAngle:
      "AI-driven vaccine design platform — predict optimal antigens and formulations to accelerate pandemic preparedness.",
    tags: ["biology", "drug-discovery"],
    definition:
      "Computationally selecting vaccine antigens (epitopes), optimizing formulations and adjuvants, and predicting immunogenicity to elicit protective immune responses.",
    bottleneck:
      "Epitope immunogenicity prediction accuracy; integrating structure with sequence; HLA polymorphism; T-cell vs B-cell epitope balance.",
    currentSota:
      "ImmunoStruct (structure + sequence + biochemical); EpiScan for antibody epitopes; WALLE (PLM + GNN); GraphBepi; MUNIS for validated epitope discovery.",
    solvedState:
      "Input pathogen sequence → output vaccine candidates (antigens, formulations) with predicted and validated immunogenicity. Rapid pandemic vaccine design.",
    symmetries: ["Peptide Permutation", "HLA Allele Equivariance", "Structural Epitope Invariance"],
    benchmarks: ["IEDB", "AsEP", "SARS-CoV-2 epitope validation"],
    papers: [
      { title: "ImmunoStruct: Integration of protein sequence, structure, and biochemical properties for immunogenicity prediction", authors: "Various", year: 2024, link: "https://doi.org/10.1101/2024.11.01.621580" },
      { title: "EpiScan: accurate high-throughput mapping of antibody-specific epitopes using sequence information", authors: "Various", year: 2024, link: "https://doi.org/10.1038/s41540-024-00432-7" },
      { title: "WALLE: Protein language models and graph neural networks for epitope prediction", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2407.18184" },
    ],
  },
  epigenomics: {
    id: "epigenomics",
    name: "Epigenomics",
    shortName: "Epigenomics",
    x: 0.26,
    y: 0.44,
    z: 0.55,
    category: "Biology",
    whyItMatters:
      "Epigenetic modifications regulate gene expression without changing DNA. Key to understanding cancer, aging, and cellular reprogramming.",
    whyItsHard:
      "Multi-modal data (methylation, histone marks, chromatin accessibility). Cell-type-specific. Temporal dynamics are poorly captured.",
    overlooked: "Yes",
    startupAngle:
      "Epigenetic clock and reprogramming prediction platform — applications in longevity and cancer diagnostics.",
    tags: ["biology", "genomics"],
    definition:
      "Modeling and predicting epigenomic signals (methylation, histone marks, chromatin accessibility, 3D contacts) from sequence and context, often in a cell-type-specific manner.",
    bottleneck:
      "Multi-modal integration; cell-type and context specificity; long-range chromatin interactions; temporal and dynamical modeling.",
    currentSota:
      "EpiGePT for context-specific epigenomics; ChromFound for scATAC; EpiAgent (5M cells); Hi-C foundation models for chromatin architecture.",
    solvedState:
      "Predict epigenomic landscape from genotype and cell type. Cross-cell-type prediction of chromatin state. Reliable variant effect on epigenome.",
    symmetries: ["Genomic Position Invariance", "Cell-type Conditioning", "Reverse Complement"],
    benchmarks: ["ENCODE", "Cistrome", "scATAC benchmarks", "Chromatin contact prediction"],
    papers: [
      { title: "ChromFound: Towards A Universal Foundation Model for Single-Cell Chromatin Accessibility Data", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2505.12638" },
      { title: "EpiGePT: a pretrained transformer-based language model for context-specific human epigenomics", authors: "Gao et al.", year: 2024, link: "https://doi.org/10.1186/s13059-024-03449-7" },
      { title: "EpiAgent: foundation model for single-cell epigenomics", authors: "Various", year: 2025, link: "https://doi.org/10.1038/s41592-025-02822-z" },
    ],
  },
  rare_disease: {
    id: "rare_disease",
    name: "Rare Disease Genomics",
    shortName: "Rare Disease",
    x: 0.12,
    y: 0.38,
    z: 0.42,
    category: "Biology",
    whyItMatters:
      "~400M people globally have rare diseases. Aggregated, it's a massive unmet need. Transfer learning from common diseases and multi-task models could help.",
    whyItsHard:
      "Small patient populations = small datasets = hard to publish. No big pharma interest (market too small per disease).",
    overlooked: "Very",
    startupAngle:
      "AI diagnostics for rare diseases (faster diagnosis = lives saved). Orphan drug incentives make even small markets viable.",
    tags: ["biology", "genomics", "drug-discovery"],
    definition:
      "Integrating genomic (WES/WGS) and phenotypic data to diagnose rare Mendelian disorders by identifying causative variants and prioritizing candidate genes.",
    bottleneck:
      "Extreme data scarcity per disease; phenotype-genotype mapping; integrating multi-modal evidence (sequence, RNA, phenotype); interpretability for clinicians.",
    currentSota:
      "RareCollab (agentic system, 77% top-5); Genetic Transformer for variant prioritization; Exomiser, PhenIX; RareBench for LLM evaluation; HyenaDNA + GNN for gene prioritization.",
    solvedState:
      "Input: phenotype + genome. Output: diagnosed disease with causal variant and confidence. End diagnostic odyssey for majority of rare disease patients.",
    symmetries: ["Variant Permutation", "Phenotype Similarity", "Gene Ontology Structure"],
    benchmarks: ["RareBench", "Undiagnosed Diseases Network", "Deciphering Developmental Disorders"],
    papers: [
      { title: "RareCollab: An Agentic System Diagnosing Mendelian Disorders with Integrated Phenotypic and Molecular Evidence", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2602.04058" },
      { title: "Genetic Transformer: Rapid and Accurate Identification of Causative Variants in Rare Genetic Diseases", authors: "Various", year: 2024, link: "https://doi.org/10.1101/2024.07.18.24310666" },
      { title: "Assessing the Utility of Large Language Models for Phenotype-Driven Gene Prioritization in Rare Genetic Disorder Diagnosis", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2403.14801" },
    ],
  },
  glycan_modeling: {
    id: "glycan_modeling",
    name: "Glycan Modeling",
    shortName: "Glycan Modeling",
    x: 0.06,
    y: 0.32,
    z: 0.68,
    category: "Biology",
    whyItMatters:
      "Glycans coat every cell surface and mediate immune recognition, infection, and cancer metastasis. They're the 'dark matter' of biology.",
    whyItsHard:
      "Branching structures (not linear chains like proteins/DNA). Extreme diversity. Very few structural databases. No AlphaFold equivalent.",
    overlooked: "Very",
    startupAngle:
      "Glycan-aware drug design and biomarker discovery — a completely underserved computational space.",
    tags: ["biology", "molecular"],
    definition:
      "Predicting glycan structure, function, and interactions from sequence/graph representation. Includes structure elucidation from MS and structure-function relationships.",
    bottleneck:
      "Branching topology and stereochemistry; lack of standardized databases; linking structure to biological function; multi-scale (monosaccharide to atom) modeling.",
    currentSota:
      "GlycanAA/PreGlycanAA (hierarchical GNN, multi-scale); CandyCrunch for MS/MS structure prediction; GlycanML benchmark; multi-relational GNNs.",
    solvedState:
      "Given glycan composition/structure, predict function, immunogenicity, protein binding. Automated glycan annotation from MS. Glycan-aware therapeutic design.",
    symmetries: ["Graph Isomorphism (tree structure)", "Monosaccharide Equivariance", "Linkage Invariance"],
    benchmarks: ["GlycanML", "CFG", "UniCarbKB", "MS/MS annotation accuracy"],
    papers: [
      { title: "Modeling All-Atom Glycan Structures via Hierarchical Message Passing and Multi-Scale Pre-training", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2506.01376" },
      { title: "Predicting glycan structure from tandem mass spectrometry via deep learning", authors: "Various", year: 2024, link: "https://doi.org/10.1038/s41592-024-02314-6" },
      { title: "GlycanML: Multi-task multi-structure benchmark for glycan machine learning", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2405.16206" },
    ],
  },
  protein_folding: {
    id: "protein_folding",
    name: "Static Protein Folding",
    shortName: "Protein Folding",
    x: 0.92,
    y: 0.54,
    z: 0.12,
    category: "Biology",
    whyItMatters:
      "AlphaFold 2/3 largely solved single-chain structure prediction. Incremental improvements on benchmarks.",
    whyItsHard:
      "The leaderboard is saturated. Real remaining challenges (dynamics, complexes, disorder) are different problems.",
    overlooked: "Very Crowded",
    startupAngle:
      "Another 0.5% GDT improvement changes nothing. The marginal return to one more researcher is low.",
    tags: ["biology", "molecular", "crowded"],
    definition:
      "Predicting the 3D tertiary structure of a single-chain protein from its amino acid sequence, assuming a single dominant conformation (native state).",
    bottleneck:
      "Diminishing returns on benchmarks; difficult targets with shallow/noisy MSAs; the remaining unsolved cases (disorder, dynamics) require different formulations.",
    currentSota:
      "AlphaFold 2/3; RoseTTAFold; MULTICOM4 (MSA engineering, CASP16 top performer); ESMFold; numerous fine-tuned variants.",
    solvedState:
      "Already largely solved for single-domain globular proteins. Remaining gap: consistently high accuracy on difficult targets with poor MSA coverage.",
    symmetries: ["SE(3) Equivariance", "Permutation Invariance (sequence)", "MSA Column Permutation"],
    benchmarks: ["CASP", "CAMEO", "PDB", "TM-score", "GDT-TS"],
    papers: [
      { title: "Highly accurate protein structure prediction with AlphaFold", authors: "Jumper et al.", year: 2021, link: "https://doi.org/10.1038/s41586-021-03819-2" },
      { title: "AlphaFold two years on: validation and impact", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2403.02124" },
      { title: "Boosting AlphaFold protein tertiary structure prediction through MSA engineering in CASP16", authors: "Various", year: 2025, link: "https://doi.org/10.1038/s42003-025-08960-6" },
    ],
  },
  small_mol_gen: {
    id: "small_mol_gen",
    name: "Small Molecule Generation",
    shortName: "Small Mol Gen",
    x: 0.86,
    y: 0.42,
    z: 0.22,
    category: "Biology",
    whyItMatters:
      "Dozens of diffusion/flow/VAE/GAN models generate drug-like molecules. Most optimize easy proxy metrics (QED, SA score).",
    whyItsHard:
      'The bottleneck was never "generate more molecules" — it\'s synthesizability, selectivity, ADMET, and clinical translation.',
    overlooked: "Very Crowded",
    startupAngle:
      "Models that only optimize computed properties are a commodity. Need to solve synthesizability and clinical translation.",
    tags: ["generative", "biology", "molecular", "crowded"],
    definition:
      "Generating novel small molecule structures (2D/3D) that satisfy chemical validity, drug-likeness, and optionally target-specific constraints (e.g., binding to a pocket).",
    bottleneck:
      "Synthesizability and synthetic route feasibility; selectivity and ADMET prediction; moving from proxy metrics to experimental validation.",
    currentSota:
      "DiffSBDD, MolFORM (flow matching for structure-based design); FlowMol3; GCDM; DMol (schedule-driven diffusion); various graph VAEs.",
    solvedState:
      "Generate molecules that are synthesizable, selective, and clinically tractable. Integration with retrosynthesis and experimental validation loops.",
    symmetries: ["SE(3) Equivariance", "Graph Isomorphism", "Molecular Graph Invariance"],
    benchmarks: ["MOSES", "GuacaMol", "Pocket-based generation", "Synthesizability scores"],
    papers: [
      { title: "Structure-based Drug Design with Equivariant Diffusion Models", authors: "Schneuing et al.", year: 2022, link: "https://arxiv.org/abs/2210.13695" },
      { title: "MolFORM: Multi-modal Flow Matching for Structure-Based Drug Design", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2507.05503" },
      { title: "DMol: A Schedule-Driven Diffusion Model for Highly Efficient and Versatile Molecule Generation", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2504.06312" },
    ],
  },
  docking: {
    id: "docking",
    name: "Protein-Ligand Docking",
    shortName: "Docking",
    x: 0.78,
    y: 0.34,
    z: 0.28,
    category: "Biology",
    whyItMatters:
      "ML docking (DiffDock, etc.) improved speed but scoring accuracy plateaued. Still doesn't reliably predict binding affinity.",
    whyItsHard:
      "Docking without accurate free energy estimation is limited. The real value is in FEP/binding affinity, not pose prediction.",
    overlooked: "Crowded",
    startupAngle:
      "Crowded with incremental improvements. The real opportunity is in free energy perturbation methods.",
    tags: ["biology", "molecular", "drug-discovery", "crowded"],
    definition:
      "Predicting the 3D binding pose of a small molecule ligand in a protein binding pocket, and optionally ranking poses by predicted affinity.",
    bottleneck:
      "Pose prediction has improved; binding affinity and free energy prediction remain the limiting factor. Scoring function accuracy; flexibility.",
    currentSota:
      "DiffDock (38% top-1 on PDBBind); Re-Dock for flexible docking; GeoDirDock; Gnina; Vina; FEP methods for affinity (separate problem).",
    solvedState:
      "Reliable pose prediction for most targets. Accurate binding free energy from poses. Integration with FEP for lead optimization.",
    symmetries: ["SE(3) Equivariance", "Ligand Internal Symmetry", "Pocket Rigidity/Flexibility"],
    benchmarks: ["PDBBind", "CASF", "CrossDocked", "RMSD < 2Å success rate"],
    papers: [
      { title: "DiffDock: Diffusion Steps, Twists, and Turns for Molecular Docking", authors: "Corso et al.", year: 2023, link: "https://arxiv.org/abs/2210.01776" },
      { title: "Re-Dock: Towards Flexible and Realistic Molecular Docking with Diffusion Bridge", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2402.11459" },
      { title: "GeoDirDock: Geodesic-guided diffusion for molecular docking", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2404.06481" },
    ],
  },
  qsar: {
    id: "qsar",
    name: "QSAR / Molecular Property Prediction",
    shortName: "QSAR",
    x: 0.82,
    y: 0.24,
    z: 0.15,
    category: "Biology",
    whyItMatters:
      "Predicting molecular properties (toxicity, solubility, logP) from structure. A classic cheminformatics task with decades of work.",
    whyItsHard:
      "Marginal gains from fancier architectures are tiny. The bottleneck is data quality and domain shift, not model capacity.",
    overlooked: "Very Crowded",
    startupAngle:
      "Random forests still competitive on many benchmarks. Low marginal return to new approaches.",
    tags: ["biology", "molecular", "crowded"],
    definition:
      "Predicting molecular properties (toxicity, solubility, logP, activity) from 2D/3D molecular structure using quantitative structure-activity relationship models.",
    bottleneck:
      "Data quality, scarcity, and domain shift; activity cliffs; limited gains from representation learning on many benchmarks.",
    currentSota:
      "MoleculeNet benchmarks; fixed representations (ECFP, MACCS) often competitive with learned; GNNs, transformers; pre-training helps with scale.",
    solvedState:
      "Routine accurate prediction for well-covered chemical space. Reliable uncertainty quantification. Domain adaptation for new assays.",
    symmetries: ["Graph Isomorphism", "Molecular Graph Invariance", "Permutation Invariance"],
    benchmarks: ["MoleculeNet", "OMol25", "TDC", "ChEMBL"],
    papers: [
      { title: "MoleculeNet: a benchmark for molecular machine learning", authors: "Wu et al.", year: 2018, link: "https://doi.org/10.1039/C7SC02664A" },
      { title: "A systematic study of key elements underlying molecular property prediction", authors: "Various", year: 2023, link: "https://doi.org/10.1038/s41467-023-41948-6" },
      { title: "The Open Molecules 2025 (OMol25) Dataset, Evaluations, and Models", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2505.08762" },
    ],
  },
  drug_repurposing: {
    id: "drug_repurposing",
    name: "Drug Repurposing via Knowledge Graphs",
    shortName: "Drug Repurposing",
    x: 0.74,
    y: 0.16,
    z: 0.25,
    category: "Biology",
    whyItMatters:
      "Many startups and papers linking drugs → targets → diseases via graph neural networks on biomedical KGs.",
    whyItsHard:
      "Knowledge graphs are incomplete, noisy, and biased toward well-studied entities. Predictions rarely validate experimentally.",
    overlooked: "Crowded",
    startupAngle:
      '"Link prediction on KG" ≠ drug discovery. Low defensibility, low validation rates.',
    tags: ["biology", "drug-discovery", "crowded"],
    definition:
      "Identifying new therapeutic indications for existing drugs by reasoning over biomedical knowledge graphs linking drugs, targets, diseases, and pathways.",
    bottleneck:
      "KG incompleteness and bias; link prediction ≠ therapeutic efficacy; experimental validation rates; interpretability for clinicians.",
    currentSota:
      "TxGNN (foundation model, 49% improvement on indications); K-Paths for graph path reasoning; DTD-GNN; various GNN and LLM hybrids.",
    solvedState:
      "Predictions that validate in pre-clinical models at high rate. Interpretable multi-hop explanations. Integration with clinical decision support.",
    symmetries: ["Graph Isomorphism", "Entity Permutation", "Relation Type Invariance"],
    benchmarks: ["DrugBank", "PrimeKG", "Off-label prediction accuracy", "Experimental validation rate"],
    papers: [
      { title: "A foundation model for clinician-centered drug repurposing", authors: "Huang et al.", year: 2024, link: "https://doi.org/10.1038/s41591-024-03233-x" },
      { title: "K-Paths: Reasoning over Graph Paths for Drug Repurposing and Drug Interaction Prediction", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2502.13344" },
      { title: "Drug repurposing based on the DTD-GNN graph neural network", authors: "Various", year: 2024, link: "https://doi.org/10.1186/s12864-024-10499-5" },
    ],
  },

  // ──────── MATERIALS & CHEMICAL SYSTEMS ────────
  catalyst_design: {
    id: "catalyst_design",
    name: "Catalyst Discovery & Design",
    shortName: "Catalyst Design",
    x: 0.22,
    y: 0.92,
    z: 0.68,
    category: "Chemistry",
    whyItMatters:
      "Catalysts underpin 90% of chemical manufacturing. Better catalysts = cheaper green hydrogen, CO₂ conversion, fertilizer.",
    whyItsHard:
      "Catalytic surfaces involve complex electronic structure, reaction intermediates, and dynamic restructuring. DFT is expensive; ML surrogates need to capture reactivity, not just geometry.",
    overlooked: "Yes",
    startupAngle:
      'AI-first catalyst design for green chemistry. Think: "design a catalyst for X reaction in Y conditions." Huge industrial TAM (chemicals = $5T+ market).',
    tags: ["generative", "chemistry", "materials", "simulation"],
    definition:
      "The computational discovery and design of heterogeneous catalysts—materials that accelerate chemical reactions without being consumed—for green chemistry applications such as CO2 reduction, hydrogen evolution, and ammonia synthesis, given target reactions and operating conditions.",
    bottleneck:
      "Modeling complex electronic structure, reaction intermediates, and surface restructuring at the electrode-electrolyte interface; bridging DFT accuracy with experimental conditions and scalability.",
    currentSota:
      "OCP (DimeNet++, SchNet on OC20/OC22); CatTSunami (GNN for transition state search, 1500× faster than DFT); ChemReasoner (LLM + GNN); OCx24 experimental validation pipeline.",
    solvedState:
      "Specify target reaction and conditions → AI outputs catalyst compositions and structures with validated activity, selectivity, and stability. Routine computational catalyst discovery with closed-loop experimental validation.",
    symmetries: ["SE(3) Equivariance","Periodic Boundary Conditions","Surface Slab Symmetry","Adsorbate Permutation Invariance"],
    benchmarks: ["Open Catalyst 2020 (OC20)","Open Catalyst 2022 (OC22)","OCx24 (experimental)"],
    papers: [
      { title: "Open Catalyst 2020 (OC20) Dataset and Community Challenges", authors: "Chanussot et al.", year: 2021, link: "https://arxiv.org/abs/2010.09990" },
      { title: "An Artificial Intelligence (AI) workflow for catalyst design and optimization", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2402.04557" },
      { title: "Open Catalyst Experiments 2024 (OCx24): Bridging Experiments and Computational Models", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2411.11783" },
    ],
  },
  csp: {
    id: "csp",
    name: "Crystal Structure Prediction (CSP)",
    shortName: "Crystal Struct Pred",
    x: 0.10,
    y: 0.86,
    z: 0.62,
    category: "Chemistry",
    whyItMatters:
      "Predict how molecules pack into crystals. Determines drug bioavailability (polymorphs), battery performance, semiconductor properties.",
    whyItsHard:
      "Exponential search space. Must model periodic symmetries (SE(3) × torus). All-atom diffusion ignores crystallographic constraints.",
    overlooked: "Yes",
    startupAngle:
      "Polymorph prediction for pharma (avoid billion-dollar patent cliffs from unexpected crystal forms). Materials-by-design for batteries and semiconductors.",
    tags: ["generative", "chemistry", "materials"],
    definition:
      "Predicting the three-dimensional packing of molecules into crystalline structures—including space group, unit cell parameters, and atomic positions—from molecular composition, enabling polymorph prediction and materials-by-design.",
    bottleneck:
      "Exponential search space over space groups and unit cell parameters; modeling periodic boundary conditions; capturing weak intermolecular interactions (dispersion, hydrogen bonding) at quantum accuracy.",
    currentSota:
      "OXtal (100M param all-atom diffusion, 600K structures); TCSP 2.0 (template-based, 83.89% space-group success); CSPBench methods; CALYPSO (DFT-based); ML potential-based CSP.",
    solvedState:
      "Given molecular structure → predict experimentally observed crystal forms with correct space group and packing. Reliable polymorph risk assessment for pharma and materials discovery.",
    symmetries: ["Space Group Symmetry (230 groups)","Periodic Boundary Conditions","SE(3) on unit cell","Molecular Conformer Equivariance"],
    benchmarks: ["CSPBench (180 test structures)","Cambridge Structural Database (CSD)","CSP blind tests"],
    papers: [
      { title: "OXtal: An All-Atom Diffusion Model for Organic Crystal Structure Prediction", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2512.06987" },
      { title: "CSPBench: A comprehensive benchmark for crystal structure prediction algorithms", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2407.00733" },
      { title: "E(3)-Equivariant Diffusion for Crystal Structure Generation", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2403.15477" },
    ],
  },
  multi_scale_sim: {
    id: "multi_scale_sim",
    name: "Multi-Scale Biological Simulation",
    shortName: "Multi-Scale Sim",
    x: 0.16,
    y: 0.80,
    z: 0.82,
    category: "Chemistry",
    whyItMatters:
      "Bridge quantum → atomistic → coarse-grained → cellular → tissue scales in a single coherent framework.",
    whyItsHard:
      "Each scale has different physics, timescales (fs to hours), and representations. No unified ML framework exists. Requires learning across resolutions.",
    overlooked: "Very",
    startupAngle:
      'A "digital twin" for cells/organs that can simulate drug effects across scales. The holy grail of computational biology.',
    tags: ["simulation", "chemistry", "biology"],
    definition:
      "Bridging simulations across scales—from quantum electronic structure (fs, few atoms) through atomistic MD (ns–μs) and coarse-grained models to cellular/tissue dynamics (ms–hours)—in a coherent, coupled framework.",
    bottleneck:
      "Different physics, timescales (10^12× span), and representations at each scale; hand-crafted coarse-graining loses crucial detail; no unified ML framework for learning across resolutions.",
    currentSota:
      "MiMiC (multiscale MPMD framework); million-atom quantum biomolecular simulations (Hartree-Fock on bacteriophages); adaptive VQE-PDFT for electron transfer; fragmentation + QM/MM.",
    solvedState:
      "Specify system and observables → single framework outputs properties at appropriate scale with automatic resolution selection. Digital twin simulating drug effects from electronic structure to cellular response.",
    symmetries: ["SE(3) Equivariance","Scale Invariance","Energy Conservation across handoffs","Markovian coarse-graining consistency"],
    benchmarks: ["Multi-scale protein folding","Membrane permeation","Enzyme catalysis QM/MM","Bridging quantum to cellular"],
    papers: [
      { title: "Bridging Quantum Mechanics and Biology at the Million-Atom Scale", authors: "Various", year: 2024, link: "https://doi.org/10.21203/rs.3.rs-7327472/v1" },
      { title: "Integrating Quantum Computing with Multiconfiguration Pair-Density Functional Theory for Biological Electron Transfer", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2508.07359" },
      { title: "Multiscale quantum algorithms for quantum chemistry", authors: "Various", year: 2023, link: "https://doi.org/10.1039/D2SC06875C" },
    ],
  },
  dft_surrogates: {
    id: "dft_surrogates",
    name: "Quantum Chemistry Surrogates (DFT)",
    shortName: "DFT Surrogates",
    x: 0.40,
    y: 0.78,
    z: 0.45,
    category: "Chemistry",
    whyItMatters:
      "Replace expensive DFT/CCSD(T) calculations with ML models that predict electronic structure, energies, and properties at near-quantum accuracy.",
    whyItsHard:
      "Generalization across chemical space. Capturing electron correlation. Need equivariant models that respect orbital symmetries, not just nuclear positions.",
    overlooked: "Medium",
    startupAngle:
      "Cloud-hosted ML quantum chemistry engine — 1000x faster than Gaussian, pay-per-molecule. Computational chemistry as a service.",
    tags: ["simulation", "chemistry", "quantum"],
    definition:
      "Machine learning models that replace expensive density functional theory (DFT) or coupled-cluster [CCSD(T)] calculations for predicting electronic structure, total energies, forces, and molecular properties at near-quantum accuracy.",
    bottleneck:
      "Generalization across chemical space; capturing electron correlation and orbital symmetries; transferability to out-of-distribution compositions; balancing accuracy vs. speed.",
    currentSota:
      "MACE, NequIP, SchNet, DimeNet++ on OC20/OC22; CHGNet (materials); NewtonNet (Hessians); transfer learning and fine-tuning for new chemistries.",
    solvedState:
      "Predict energies, forces, and properties for arbitrary molecules/materials at CCSD(T)-like accuracy in milliseconds. Computational chemistry as a routine, cloud-hosted service.",
    symmetries: ["SE(3) Equivariance","Permutation Invariance (atoms)","Orbital Symmetry","Gauge Invariance (electronic)"],
    benchmarks: ["Open Catalyst 2020 (OC20)","rMD17","3BPA","QM9","Materials Project"],
    papers: [
      { title: "MACE: Higher Order Equivariant Message Passing Neural Networks for Fast and Accurate Force Fields", authors: "Batatia et al.", year: 2022, link: "https://arxiv.org/abs/2206.07697" },
      { title: "E(3)-Equivariant Graph Neural Networks for Data-Efficient and Accurate Interatomic Potentials", authors: "Batzner et al.", year: 2021, link: "https://arxiv.org/abs/2101.03164" },
      { title: "SchNet – A deep learning architecture for molecules and materials", authors: "Schütt et al.", year: 2017, link: "https://doi.org/10.1063/1.5019779" },
    ],
  },
  battery_materials: {
    id: "battery_materials",
    name: "Battery Materials Discovery",
    shortName: "Battery Materials",
    x: 0.30,
    y: 0.74,
    z: 0.55,
    category: "Chemistry",
    whyItMatters:
      "Next-gen batteries (solid-state, sodium-ion) require discovering new electrode and electrolyte materials with optimal properties.",
    whyItsHard:
      "Multi-objective optimization (capacity, stability, conductivity, cost). Requires modeling electrochemical interfaces and ion transport.",
    overlooked: "Medium",
    startupAngle:
      "AI-driven battery materials discovery platform — critical for EV and grid storage markets ($100B+).",
    tags: ["materials", "chemistry", "simulation"],
    definition:
      "Discovering and optimizing electrode materials, electrolytes, and solid-state conductors for next-generation batteries—optimizing capacity, ionic conductivity, electrochemical stability, and cost.",
    bottleneck:
      "Multi-objective optimization under conflicting constraints; modeling electrochemical interfaces and ion transport; predicting lifetime and degradation; bridging computation to synthesis and cycling performance.",
    currentSota:
      "Discovery Learning (active + zero-shot for lifetime); CHGNet + DFT screening for Li-ion conductors; DRXNet for cathode electrochemistry; iterative active learning for optimization.",
    solvedState:
      "Specify performance targets → AI proposes materials validated in lab with target capacity, stability, and conductivity. Routine computational discovery for solid-state and beyond-Li batteries.",
    symmetries: ["SE(3) Equivariance","Periodic Boundary Conditions","Composition Permutation","Ion Transport Symmetry"],
    benchmarks: ["Materials Project (battery explorer)","AFLOW","Li-ion conductor screening","Battery lifetime prediction"],
    papers: [
      { title: "Discovery Learning accelerates battery design evaluation", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2508.06985" },
      { title: "Deep learning of experimental electrochemistry for battery cathodes across diverse compositions", authors: "Various", year: 2023, link: "https://arxiv.org/abs/2304.04986" },
      { title: "Hierarchical high-throughput screening of alkaline-stable lithium-ion conductors combining machine learning and first-principles calculations", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2511.20964" },
    ],
  },
  ml_force_fields: {
    id: "ml_force_fields",
    name: "ML Force Fields (MLIPs)",
    shortName: "ML Force Fields",
    x: 0.60,
    y: 0.76,
    z: 0.48,
    category: "Chemistry",
    whyItMatters:
      "Simulate molecular dynamics at near-DFT accuracy but 10⁴–10⁶x faster. Essential for drug binding, protein dynamics, materials.",
    whyItsHard:
      "Generalization to unseen chemistries. Long-range electrostatics. Stability over long MD trajectories (error accumulation). Training data is expensive.",
    overlooked: "Getting Crowded",
    startupAngle:
      "Universal force field platform (like MACE/ANI but production-grade) → powers virtual screening, materials simulation, and formulation design.",
    tags: ["simulation", "chemistry", "molecular"],
    definition:
      "Learning interatomic potentials (force fields) from ab initio data to enable molecular dynamics at near-DFT accuracy but 10^4–10^6× faster, for drug binding, protein dynamics, and materials simulation.",
    bottleneck:
      "Generalization to unseen chemistries; long-range electrostatics; stability over long MD trajectories (error accumulation); data efficiency; training data cost.",
    currentSota:
      "MACE (higher-order equivariant MPNN); NequIP (E(3)-equivariant); SchNet; CHGNet (charge-informed); Allegro; ACE; ViSNet.",
    solvedState:
      "Universal force field for arbitrary chemistry: nanosecond MD at DFT accuracy, stable over microsecond scales. Production-grade platform for virtual screening and materials simulation.",
    symmetries: ["SE(3) Equivariance","Permutation Invariance","Energy Conservation","Virial Stress Symmetry"],
    benchmarks: ["rMD17","3BPA","AcAc","Open Catalyst 2020 (OC20)","ISO17"],
    papers: [
      { title: "MACE: Higher Order Equivariant Message Passing Neural Networks for Fast and Accurate Force Fields", authors: "Batatia et al.", year: 2022, link: "https://arxiv.org/abs/2206.07697" },
      { title: "E(3)-Equivariant Graph Neural Networks for Data-Efficient and Accurate Interatomic Potentials", authors: "Batzner et al.", year: 2021, link: "https://arxiv.org/abs/2101.03164" },
      { title: "CHGNet: Pretrained universal neural network potential for charge-informed atomistic modeling", authors: "Deng et al.", year: 2023, link: "https://arxiv.org/abs/2302.14231" },
    ],
  },
  polymer_design: {
    id: "polymer_design",
    name: "Polymer Design",
    shortName: "Polymer Design",
    x: 0.14,
    y: 0.68,
    z: 0.5,
    category: "Chemistry",
    whyItMatters:
      "Design polymers with target properties (strength, degradability, conductivity). Critical for sustainable materials.",
    whyItsHard:
      "Polymer property prediction requires capturing long-range chain statistics. Lack of standardized representations and datasets.",
    overlooked: "Yes",
    startupAngle:
      "AI polymer design for sustainable packaging, advanced materials, and drug delivery systems.",
    tags: ["generative", "chemistry", "materials"],
    definition:
      "Designing polymers with target properties—mechanical, thermal, conductive, degradability—by predicting structure-property relationships from repeat units, chain architecture, and degree of polymerization.",
    bottleneck:
      "Long-range chain statistics and morphology; lack of standardized polymer representations; scarcity of property data; capturing solvation and processing effects.",
    currentSota:
      "polyBART (PSELFIES language model); OPoly26 dataset (6.57M DFT calculations); SPACIER (MD + Bayesian optimization); graph neural networks for repeat-unit property prediction.",
    solvedState:
      "Specify target properties → AI outputs polymer architectures with validated performance. Routine generative design for sustainable packaging, advanced materials, drug delivery.",
    symmetries: ["Graph Isomorphism (repeat units)","Sequence Permutation (monomer order)","Chain Length Scaling","Architecture Invariance"],
    benchmarks: ["OPoly26","Polymer property prediction","Experimental validation (e.g., Tg, modulus)"],
    papers: [
      { title: "The Open Polymers 2026 (OPoly26) Dataset and Evaluations", authors: "Various", year: 2026, link: "https://arxiv.org/abs/2512.23117" },
      { title: "SPACIER: On-Demand Polymer Design with Fully Automated All-Atom Classical Molecular Dynamics Integrated into Machine Learning Pipelines", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2408.05135" },
      { title: "polyBART: Bidirectional Autoregressive Transformers for polymer property prediction and design", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2210.07239" },
    ],
  },
  mof_design: {
    id: "mof_design",
    name: "Metal-Organic Framework (MOF) Design",
    shortName: "MOF Design",
    x: 0.08,
    y: 0.62,
    z: 0.55,
    category: "Chemistry",
    whyItMatters:
      "MOFs are nanoporous materials with applications in carbon capture, gas storage, and catalysis. Modular building blocks enable vast design spaces.",
    whyItsHard:
      "Combinatorial design space of linkers and metal nodes. Need to predict stability, porosity, and gas uptake simultaneously.",
    overlooked: "Yes",
    startupAngle:
      "AI-designed MOFs for carbon capture and hydrogen storage — aligns with climate investment trends.",
    tags: ["generative", "chemistry", "materials"],
    definition:
      "Designing metal-organic frameworks (MOFs)—porous crystalline materials of metal nodes and organic linkers—for gas capture, storage, separation, and catalysis by optimizing topology, pore size, and stability.",
    bottleneck:
      "Combinatorial design space of linkers and nodes; predicting stability, porosity, and gas uptake simultaneously; synthesisability; high-throughput characterization.",
    currentSota:
      "MOFGPT (transformer + RL for generation); MOFGen (agentic AI, 5 synthesized MOFs); MOF-LLM (block-level prediction); CGCNN/MOFFormer for property prediction.",
    solvedState:
      "Specify gas targets (CO2, H2, etc.) → AI designs MOFs with validated uptake and stability. Routine AI-driven MOF discovery for carbon capture and hydrogen storage.",
    symmetries: ["Space Group Symmetry","Periodic Boundary Conditions","Linker/Node Permutation","Pore Topology Invariance"],
    benchmarks: ["CoRE MOF database","Gas uptake prediction (CO2, CH4)","Stability prediction","Synthesisability"],
    papers: [
      { title: "MOFGPT: Generative Design of Metal-Organic Frameworks using Language Models", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2506.00198" },
      { title: "System of Agentic AI for the Discovery of Metal-Organic Frameworks", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2504.14110" },
      { title: "Property-guided Inverse Design of Metal-Organic Frameworks Using Quantum Natural Language Processing", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2405.11783" },
    ],
  },
  retrosynthesis: {
    id: "retrosynthesis",
    name: "Retrosynthesis & Reaction Planning",
    shortName: "Retrosynthesis",
    x: 0.52,
    y: 0.66,
    z: 0.48,
    category: "Chemistry",
    whyItMatters:
      "Given a target molecule, find a viable synthetic route from commercially available starting materials.",
    whyItsHard:
      "Requires modeling reaction feasibility, selectivity, yields, and multi-step planning. Current models struggle with strategic planning over long routes.",
    overlooked: "Medium",
    startupAngle:
      "AI synthesis planner integrated with robotic chemistry → autonomous molecule-making. Lab-as-a-service for on-demand small molecules.",
    tags: ["agents", "chemistry"],
    definition:
      "Given a target molecule, identify viable multi-step synthetic routes from commercially available starting materials, including reaction feasibility, selectivity, yields, and strategic planning over long routes.",
    bottleneck:
      "Strategic planning over many steps; modeling real-world constraints (availability, cost, safety); one-step model accuracy; generalizing to novel chemistries not in training data.",
    currentSota:
      "RetroChimera (ensemble); DMS Explorer XL (transformer, multistep); Double-Ended Synthesis Planning (DESP); template-based and template-free approaches; GPT-4/ChemCrow for planning.",
    solvedState:
      "Input target → output validated synthetic route executable in lab. AI synthesis planner integrated with robotic chemistry; routine autonomous molecule synthesis.",
    symmetries: ["Graph Isomorphism (molecules)","Reaction Center Equivariance","Retrosynthetic Disconnection Permutation"],
    benchmarks: ["USPTO","Retrosynthesis benchmarks","FDA drug route prediction","One-step accuracy / solve rate"],
    papers: [
      { title: "RetroChimera: Learning-based ensemble retrosynthesis", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2412.05269" },
      { title: "Double-Ended Synthesis Planning with Goal-Conditioned Cost Networks", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2407.06334" },
      { title: "Site-specific template generative approach for retrosynthetic planning", authors: "Various", year: 2024, link: "https://doi.org/10.1038/s41467-024-52048-4" },
    ],
  },
  semiconductor_design: {
    id: "semiconductor_design",
    name: "Semiconductor Design",
    shortName: "Semiconductor Design",
    x: 0.34,
    y: 0.58,
    z: 0.58,
    category: "Chemistry",
    whyItMatters:
      "Design novel semiconductor materials with tailored band gaps, mobility, and thermal properties for next-gen electronics.",
    whyItsHard:
      "Requires accurate electronic structure calculations. Defect engineering and interfaces are poorly modeled. Manufacturing constraints add complexity.",
    overlooked: "Medium",
    startupAngle:
      "AI-accelerated semiconductor materials discovery for chipmakers and photovoltaics companies.",
    tags: ["materials", "chemistry", "simulation"],
    definition:
      "Designing novel semiconductor materials with tailored band gap, carrier mobility, and thermal properties for electronics, photovoltaics, and optoelectronics—including perovskites, oxides, and 2D materials.",
    bottleneck:
      "Accurate electronic structure for defects and interfaces; manufacturing constraints (synthesizability, stability); multi-objective optimization of conflicting properties.",
    currentSota:
      "CGCNN on Materials Project; DFT-ML pipelines for bandgap/stability; PU learning for synthesizability; POLARIS (LLM-assisted perovskite optimization).",
    solvedState:
      "Specify target bandgap and application → AI proposes synthesizable semiconductors with validated properties. Routine discovery for next-gen chips and solar cells.",
    symmetries: ["Space Group Symmetry","Periodic Boundary Conditions","Composition Permutation","Defect Symmetry"],
    benchmarks: ["Materials Project","OQMD","Perovskite stability/bandgap","Synthesizability prediction"],
    papers: [
      { title: "Bridging the Synthesizability Gap in Perovskites by Combining Computations, Literature Data, and PU Learning", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2510.06166" },
      { title: "Opportunities for Machine Learning to Accelerate Halide Perovskite Commercialization and Scale-Up", authors: "Various", year: 2021, link: "https://arxiv.org/abs/2110.03923" },
      { title: "Crystal Graph Convolutional Neural Networks for Accurate and Interpretable Prediction of Material Properties", authors: "Xie & Grossman", year: 2018, link: "https://doi.org/10.1103/PhysRevLett.120.145301" },
    ],
  },
  reaction_mechanisms: {
    id: "reaction_mechanisms",
    name: "Reaction Mechanism Prediction",
    shortName: "Reaction Mechanisms",
    x: 0.20,
    y: 0.54,
    z: 0.52,
    category: "Chemistry",
    whyItMatters:
      "Understanding reaction mechanisms (transition states, intermediates) is key to catalyst design and process optimization.",
    whyItsHard:
      "Transition state search is expensive. Mechanisms can have multiple competing pathways. Need to model rare events on high-dimensional energy surfaces.",
    overlooked: "Yes",
    startupAngle:
      "Automated mechanism elucidation platform for chemical process optimization and safety assessment.",
    tags: ["simulation", "chemistry"],
    definition:
      "Predicting reaction mechanisms—elementary steps, transition states, intermediates, and minimum-energy pathways—for organic and catalytic reactions from reactant and product structures.",
    bottleneck:
      "Transition state search is expensive; multiple competing pathways; rare events on high-dimensional energy surfaces; transferability to out-of-distribution reactions.",
    currentSota:
      "ReactAIvate (GNN for mechanism classification); NewtonNet (ML Hessians for TS optimization); adaptive TS refinement with learned flows; MEPIN (minimum-energy path prediction).",
    solvedState:
      "Input reactants and products → output complete mechanism with TS structures and barriers. Automated mechanism elucidation for process optimization and safety assessment.",
    symmetries: ["SE(3) Equivariance","Permutation Invariance","Reaction Coordinate Symmetry","Path Degeneracy"],
    benchmarks: ["TS optimization success rate","Barrier height MAE","Reaction pathway datasets"],
    papers: [
      { title: "ReactAIvate: A Deep Learning Approach to Predicting Reaction Mechanisms and Unmasking Reactivity Hotspots", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2407.10090" },
      { title: "Deep Learning of ab initio Hessians for Transition State Optimization", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2405.02247" },
      { title: "Adaptive Transition State Refinement with Learned Equilibrium Flows", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2507.16521" },
    ],
  },
  electrochemistry: {
    id: "electrochemistry",
    name: "Electrochemistry Modeling",
    shortName: "Electrochemistry",
    x: 0.26,
    y: 0.48,
    z: 0.58,
    category: "Chemistry",
    whyItMatters:
      "Electrochemical processes underpin batteries, fuel cells, electrolyzers, and corrosion. Modeling electrode-electrolyte interfaces is critical.",
    whyItsHard:
      "Requires coupling electronic structure with solvation, applied potential, and ion transport. Multi-scale and multi-physics challenge.",
    overlooked: "Yes",
    startupAngle:
      "Computational electrochemistry platform for battery and fuel cell development — faster optimization cycles.",
    tags: ["simulation", "chemistry", "materials"],
    definition:
      "Modeling electrode-electrolyte interfaces—double layer structure, capacitance, potentials of zero charge, and electrocatalytic activation barriers—coupling electronic structure with solvation and applied potential.",
    bottleneck:
      "Coupling electronic structure with implicit/explicit solvent, ions, and applied bias; interfacial capacitance and nonlinear effects; multi-scale (DFT to continuum).",
    currentSota:
      "Joint DFT (JDFT); implicit electrolyte models in VASP; Molecular Density Functional Theory (MDFT) for solvent; NESS model for capacitance; continuum-embedded linear-scaling DFT.",
    solvedState:
      "Predict interfacial structure, capacitance, and activation barriers at arbitrary potential. Routine first-principles electrochemistry for battery and fuel cell design.",
    symmetries: ["Periodic Boundary Conditions","Electrode Surface Symmetry","Solvent Permutation","Potential Symmetry"],
    benchmarks: ["Differential capacitance curves","Potentials of zero charge","Activation barriers (HER, OER)"],
    papers: [
      { title: "Joint Density-Functional Theory of the Electrode-Electrolyte Interface", authors: "Sundararaman et al.", year: 2012, link: "https://arxiv.org/abs/1205.0526" },
      { title: "Ions at electrochemical interfaces: from explicit to implicit molecular solvent descriptions", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2503.11361" },
      { title: "Improving Accuracy of Electrochemical Capacitance and Solvation Energetics in First-Principles Calculations", authors: "Various", year: 2018, link: "https://arxiv.org/abs/1801.07705" },
    ],
  },
  photovoltaics: {
    id: "photovoltaics",
    name: "Photovoltaics Materials",
    shortName: "Photovoltaics",
    x: 0.18,
    y: 0.42,
    z: 0.52,
    category: "Chemistry",
    whyItMatters:
      "Design new photovoltaic materials (perovskites, organic PV) with higher efficiency and stability for solar energy.",
    whyItsHard:
      "Need to optimize band gap, charge transport, stability, and manufacturing cost simultaneously. Degradation pathways are complex.",
    overlooked: "Medium",
    startupAngle:
      "AI-guided perovskite and next-gen solar cell materials discovery and optimization.",
    tags: ["materials", "chemistry"],
    definition:
      "Designing photovoltaic materials—perovskites, organic PV, and other absorbers—with optimal band gap, charge transport, stability, and manufacturing cost for solar energy conversion.",
    bottleneck:
      "Multi-objective optimization (efficiency vs. stability vs. cost); degradation pathways; synthesizability; predicting performance under operational conditions.",
    currentSota:
      "CGCNN + DFT screening (npj Comput. Mater.); ML for bandgap/stability (lead-free perovskites); additive screening (molecular representation learning); PU learning for synthesizability.",
    solvedState:
      "Specify efficiency targets → AI proposes synthesizable PV materials with validated PCE and stability. Routine discovery for next-gen solar cells.",
    symmetries: ["Space Group Symmetry","Composition Permutation","Band Structure Symmetry"],
    benchmarks: ["Materials Project","Perovskite bandgap/stability","Device PCE prediction","Synthesizability"],
    papers: [
      { title: "Machine learning-enabled chemical space exploration of all-inorganic perovskites for photovoltaics", authors: "Various", year: 2024, link: "https://doi.org/10.1038/s41524-024-01270-1" },
      { title: "Opportunities for Machine Learning to Accelerate Halide Perovskite Commercialization and Scale-Up", authors: "Various", year: 2021, link: "https://arxiv.org/abs/2110.03923" },
      { title: "Molecular representation learning for perovskite additive screening", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2412.14109" },
    ],
  },
  formulation_design: {
    id: "formulation_design",
    name: "Formulation Design",
    shortName: "Formulation Design",
    x: 0.12,
    y: 0.36,
    z: 0.35,
    category: "Chemistry",
    whyItMatters:
      "Drug formulation determines bioavailability, stability, and patient compliance. Critical for oral drug delivery and biologics.",
    whyItsHard:
      "Complex mixtures with many excipients. Phase behavior and stability depend on subtle interactions. Very little systematic data.",
    overlooked: "Very",
    startupAngle:
      "AI formulation optimization platform for pharma — reduce time-to-formulation from months to days.",
    tags: ["chemistry", "drug-discovery"],
    definition:
      "Optimizing pharmaceutical formulations—excipients, API loading, particle size, and dosage form—to achieve target bioavailability, stability, release kinetics, and patient compliance.",
    bottleneck:
      "Complex mixtures with many excipients; phase behavior and stability depend on subtle interactions; very little systematic, high-quality data; bridging in silico to manufacturing.",
    currentSota:
      "Generative AI for digital formulation (structure synthesis from images); FormuLLA (LLM for FDM formulations); PILLTOP (topology optimization for polypills); ML for nanomedicine formulations.",
    solvedState:
      "Specify API and target CQA → AI outputs formulation with validated performance. Reduce time-to-formulation from months to days; routine AI-driven formulation optimization.",
    symmetries: ["Composition Permutation (excipients)","Scale Invariance (concentration)","Processing Parameter Invariance"],
    benchmarks: ["Percolation threshold prediction","Release kinetics","Stability assays","Formulation datasets"],
    papers: [
      { title: "In silico formulation optimization and particle engineering of pharmaceutical products using a generative artificial intelligence structure synthesis method", authors: "Various", year: 2024, link: "https://doi.org/10.1038/s41467-024-54011-9" },
      { title: "FormuLLA: Fine-tuned Large Language Models for 3D-Printed Pharmaceutical Formulation Recommendations", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2601.02071" },
      { title: "Unleashing the power of machine learning in nanomedicine formulation development", authors: "Various", year: 2024, link: "https://chemrxiv.org/engage/chemrxiv/article-details/67ceadecfa469535b9b3e2b2" },
    ],
  },

  // ──────── PHYSICAL SYSTEMS & EARTH ────────
  plasma_fusion: {
    id: "plasma_fusion",
    name: "Plasma Physics & Fusion Control",
    shortName: "Plasma / Fusion",
    x: 0.10,
    y: 0.92,
    z: 0.72,
    category: "Physics",
    whyItMatters:
      "Fusion = unlimited clean energy. Controlling plasma instabilities is the #1 bottleneck.",
    whyItsHard:
      "Plasma is a chaotic, multi-scale system. Real-time control requires <1ms latency. Simulators are expensive. RL controllers trained in sim often don't transfer.",
    overlooked: "Yes",
    startupAngle:
      "AI control systems for fusion reactors. Several fusion startups exist but ML-native plasma control is a gap.",
    tags: ["simulation", "physics", "rl"],
    definition:
      "AI-driven magnetic control of tokamak plasmas to suppress instabilities (disruptions, edge-localized modes) and maintain stable confinement for fusion energy. Reinforcement learning agents coordinate magnetic coils in real time to sculpt and stabilize plasma shapes.",
    bottleneck:
      "Sim-to-real transfer: controllers trained on expensive simulators often fail to generalize to hardware; real-time (<1ms) latency requirements for plasma feedback control; safety constraints during exploration.",
    currentSota:
      "DeepMind/EPFL RL for TCV tokamak (plasma sculpting, shape control); 'Towards Practical Reinforcement Learning for Tokamak Magnetic Control' with 65% shape accuracy improvement; MPC-RL hybrids.",
    solvedState:
      "Autonomous plasma control that maintains stable fusion burn, suppresses disruptions reliably, and generalizes across tokamak configurations. Real-time deployment in ITER-class devices.",
    symmetries: ["Axisymmetry (tokamak geometry)","Time-reversal symmetry of ideal MHD","Gauge invariance (electromagnetic)"],
    benchmarks: ["TCV plasma shape control","ITER disruption prediction","DIII-D control benchmarks"],
    papers: [
      { title: "Magnetic control of tokamak plasmas through deep reinforcement learning", authors: "Degrave et al. (DeepMind, EPFL)", year: 2022, link: "https://www.nature.com/articles/s41586-021-04301-9" },
      { title: "Towards Practical Reinforcement Learning for Tokamak Magnetic Control", authors: "Tracey et al. (DeepMind)", year: 2024, link: "https://doi.org/10.1016/j.fusengdes.2024.114364" },
      { title: "Accelerating fusion science through learned plasma control", authors: "DeepMind Research", year: 2022, link: "https://arxiv.org/abs/2112.11759" },
    ],
  },
  turbulence: {
    id: "turbulence",
    name: "Turbulence Modeling",
    shortName: "Turbulence",
    x: 0.18,
    y: 0.86,
    z: 0.75,
    category: "Physics",
    whyItMatters:
      '"The last great unsolved problem of classical physics." Better turbulence models → better weather prediction, aerodynamics, combustion, ocean currents.',
    whyItsHard:
      "Kolmogorov cascade spans many orders of magnitude. DNS is computationally intractable at high Reynolds numbers. ML closures for LES are promising but lack guarantees.",
    overlooked: "Yes",
    startupAngle:
      "ML-augmented CFD solver that is 100x faster than DNS with LES-like cost but DNS-like accuracy. Engineering simulation market is $10B+.",
    tags: ["simulation", "physics"],
    definition:
      "Machine learning for turbulence closure models that close the Reynolds-averaged Navier-Stokes (RANS) or large-eddy simulation (LES) equations by learning the unresolved subgrid-scale stress tensor from high-fidelity data.",
    bottleneck:
      "Ensuring physical consistency (realizability, Galilean invariance); generalization across flow geometries and Reynolds numbers; incorporating known algebraic constraints among tensor components.",
    currentSota:
      "Symmetry-aware equivariant neural networks (ENNs) for RANS closure; physics-informed tensor basis networks; differentiable physics with GNNs on unstructured grids; turbulence realizability constraints as inductive bias.",
    solvedState:
      "ML closures that generalize across flow regimes, preserve key turbulence statistics, and are provably realizable. Replace hand-tuned k-ε, k-ω in industrial CFD with learned closures.",
    symmetries: ["Galilean invariance","Reynolds stress tensor symmetry (symmetric, traceless)","Rotational equivariance","RANS realizability constraints"],
    benchmarks: ["Periodic Hill flow","Backward-facing step","Airfoil flow separation","Turbulent channel flow DNS→LES"],
    papers: [
      { title: "Turbulence closure modeling with machine learning approaches: A perspective", authors: "Girimaji", year: 2023, link: "https://arxiv.org/abs/2312.14902" },
      { title: "Symmetry aware Reynolds Averaged Navier Stokes turbulence models with equivariant neural networks", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2511.09769" },
      { title: "Generalizable data-driven turbulence closure modeling on unstructured grids with differentiable physics", authors: "Various", year: 2023, link: "https://arxiv.org/abs/2307.13533" },
    ],
  },
  boltzmann: {
    id: "boltzmann",
    name: "Sampling High-Dimensional Boltzmann Distributions",
    shortName: "Boltzmann Sampling",
    x: 0.36,
    y: 0.80,
    z: 0.65,
    category: "Physics",
    whyItMatters:
      "Central to statistical physics, molecular simulation, and Bayesian inference. If you can efficiently sample, you can compute free energies, predict binding affinities, and characterize phase transitions.",
    whyItsHard:
      "Curse of dimensionality. MCMC mixes slowly in rugged energy landscapes. Flow-based samplers struggle with multimodality and mode collapse in high dimensions.",
    overlooked: "Medium",
    startupAngle:
      'A "sampling engine" that makes free energy calculations routine → pharma pays for reliable binding free energy perturbation.',
    tags: ["simulation", "physics", "molecular"],
    definition:
      "Efficiently sampling from high-dimensional Boltzmann distributions p(x) ∝ exp(-E(x)/k_B T) using flow-based or generative models, enabling computation of free energies, binding affinities, and thermodynamic observables in molecular and statistical physics.",
    bottleneck:
      "Multimodality and mode collapse; slow mixing in rugged energy landscapes; expensive energy evaluations; flow models often require samples from the target (chicken-and-egg).",
    currentSota:
      "Energy-weighted flow matching (EWFM), iterated energy-based flow matching (iEFM); flow perturbation for unbiased acceleration; FALCON for few-step sampling; path gradients for molecular systems.",
    solvedState:
      "Simulation-free or few-evaluation sampling from arbitrary Boltzmann distributions. Routine free energy calculations for drug binding, phase transitions, and rare event statistics at 100–1000× fewer energy calls.",
    symmetries: ["SE(3) equivariance (molecular systems)","Permutation invariance (identical particles)","Time-reversal symmetry (detailed balance)"],
    benchmarks: ["Lennard-Jones clusters","Alanine dipeptide","Boltzmann generators benchmark","Molecular binding free energy (relative)"],
    papers: [
      { title: "Energy-Weighted Flow Matching: Unlocking Continuous Normalizing Flows for Efficient and Scalable Boltzmann Sampling", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2509.03726" },
      { title: "Iterated Energy-based Flow Matching for Sampling from Boltzmann Densities", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2408.16249" },
      { title: "Flow perturbation to accelerate Boltzmann sampling", authors: "Various", year: 2025, link: "https://doi.org/10.1038/s41467-025-62039-8" },
    ],
  },
  neural_pdes: {
    id: "neural_pdes",
    name: "Neural PDE Solvers / Operator Learning",
    shortName: "Neural PDEs",
    x: 0.50,
    y: 0.74,
    z: 0.45,
    category: "Physics",
    whyItMatters:
      "Learn solution operators for PDEs (Navier-Stokes, Maxwell, Schrödinger) instead of solving from scratch. 100-1000x speedup for engineering simulation.",
    whyItsHard:
      "Generalization across geometries and boundary conditions. Guaranteeing conservation laws. Error bounds. Current neural operators lack reliability for safety-critical applications.",
    overlooked: "Medium",
    startupAngle:
      "AI-native simulation software for engineering (replace ANSYS/COMSOL with learned solvers). Real-time digital twins for aerospace, automotive, energy.",
    tags: ["simulation", "physics", "infrastructure"],
    definition:
      "Learning solution operators for parametric PDEs—mappings from initial/boundary conditions and parameters to solutions—enabling fast inference for Navier-Stokes, Darcy flow, and other PDE families without solving from scratch each time.",
    bottleneck:
      "Generalization to unseen geometries and boundary conditions; enforcing conservation laws; error bounds and reliability for safety-critical applications; long-horizon autoregressive error accumulation.",
    currentSota:
      "Fourier Neural Operator (FNO), U-NO, FNO-2D/3D; DeepONet; Koopman neural operators; 3D neural operators for weather; zero-shot super-resolution on turbulent flows.",
    solvedState:
      "Neural operators that generalize across geometry, boundary conditions, and parameters with certified error bounds. Real-time digital twins for engineering; 100–1000× speedup over classical solvers.",
    symmetries: ["Translation equivariance (Fourier/convolution)","Rotational equivariance (for isotropic PDEs)","Galilean invariance (Navier-Stokes)","Scale invariance (where applicable)"],
    benchmarks: ["Navier-Stokes (viscous fluids)","Darcy flow (porous media)","Burgers equation","Operator learning benchmark (Li et al.)"],
    papers: [
      { title: "Fourier Neural Operator for Parametric Partial Differential Equations", authors: "Li et al.", year: 2020, link: "https://arxiv.org/abs/2010.08895" },
      { title: "Learning skillful medium-range global weather forecasting", authors: "Lam et al. (GraphCast)", year: 2022, link: "https://arxiv.org/abs/2212.12794" },
      { title: "Neural Operator: Learning Maps Between Function Spaces", authors: "Lu et al.", year: 2021, link: "https://arxiv.org/abs/2108.08481" },
    ],
  },
  climate_emulators: {
    id: "climate_emulators",
    name: "Climate Emulators & Downscaling",
    shortName: "Climate Emulators",
    x: 0.64,
    y: 0.78,
    z: 0.42,
    category: "Physics",
    whyItMatters:
      "Run climate projections in minutes instead of months. Enable high-resolution local climate predictions for adaptation planning.",
    whyItsHard:
      "Climate models have many coupled subsystems. Rare extreme events are hardest to model but most important. Distribution shift as climate changes.",
    overlooked: "Getting Attention",
    startupAngle:
      "Hyperlocal climate risk prediction for insurance, agriculture, infrastructure planning. Massive market pull from climate adaptation spending.",
    tags: ["simulation", "physics", "earth"],
    definition:
      "ML models that emulate or downscale Earth System Model (ESM) outputs to produce high-resolution climate projections, reducing computational cost from months to minutes while preserving physical consistency and uncertainty quantification.",
    bottleneck:
      "Long-term stability (100+ year runs); physical consistency (conservation, extremes); distribution shift as climate warms; internal variability vs. forced response; multi-model generalization.",
    currentSota:
      "LUCIE (lightweight emulator, 100-year stability); ACE (200M params, moisture conservation); generative downscaling (EnScale, consistency models); zero-shot ESM downscaling; ACE-Dyn for dynamics.",
    solvedState:
      "Emulators that run 1000-member ensembles at 0.1° resolution in hours; conserve energy/moisture; capture extremes and internal variability. Operational use for IPCC-class assessments and hyperlocal risk.",
    symmetries: ["Spatial translation (homogeneous statistics)","Seasonal cyclicity","Column mass conservation (moisture)","Energy conservation"],
    benchmarks: ["ERA5 reanalysis emulation","CMIP6 multi-model downscaling","Extreme precipitation/temperature statistics","100-year stability metrics"],
    papers: [
      { title: "LUCIE: A Lightweight Uncoupled ClImate Emulator with long-term stability and physical consistency for O(1000)-member ensembles", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2405.16297" },
      { title: "Fast, Scale-Adaptive, and Uncertainty-Aware Downscaling of Earth System Model Fields with Generative Machine Learning", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2403.02774" },
      { title: "ACE: A fast, skillful learned global atmospheric model for weather and climate", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2310.02074" },
    ],
  },
  cosmological_sim: {
    id: "cosmological_sim",
    name: "Cosmological Simulation",
    shortName: "Cosmological Sim",
    x: 0.12,
    y: 0.70,
    z: 0.52,
    category: "Physics",
    whyItMatters:
      "Simulate universe evolution to test cosmological models and interpret survey data from JWST, Euclid, and Rubin Observatory.",
    whyItsHard:
      "Enormous dynamic range (from galaxy clusters to dark matter halos). N-body simulations are expensive. Requires emulation that preserves statistical properties.",
    overlooked: "Yes",
    startupAngle:
      "Fast cosmological emulators for survey data analysis — could become essential infrastructure for space agencies.",
    tags: ["simulation", "physics"],
    definition:
      "ML emulators for cosmological N-body simulations that predict nonlinear matter distribution (displacements, velocities) from linear initial conditions, enabling fast generation of mock catalogs for survey analysis and cosmological parameter inference.",
    bottleneck:
      "Preserving small-scale statistics (k ~ 1 Mpc⁻¹h); cosmology dependence across ΛCDM and beyond; generalization to primordial non-Gaussianity; error propagation in derived quantities (halos, weak lensing).",
    currentSota:
      "Field-level neural emulators (CNN) for displacement/velocity; style-parameterized cosmology interpolation; COmoving Computer Acceleration (COCA) hybrid ML+N-body; N-body GAN; COLA-based fast sims.",
    solvedState:
      "Emulators matching N-body statistics to sub-percent level at k > 1 h/Mpc; 1000× speedup; robust to cosmology and initial conditions. Standard tool for Euclid, Rubin, DESI analysis.",
    symmetries: ["Statistical homogeneity and isotropy","Translation invariance","Scale invariance (linear regime)"],
    benchmarks: ["Quijote N-body simulations","AbacusSummit","Power spectrum / bispectrum accuracy","Halo mass function"],
    papers: [
      { title: "Field Level Neural Network Emulator for Cosmological N-body Simulations", authors: "Various", year: 2022, link: "https://arxiv.org/abs/2206.04594" },
      { title: "Neural network emulator for cosmological density fields", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2408.07699" },
      { title: "COmoving Computer Acceleration (COCA): N-body simulations in an emulated frame of reference", authors: "Various", year: 2025, link: "https://doi.org/10.1051/0004-6361/202452217" },
    ],
  },
  ocean_modeling: {
    id: "ocean_modeling",
    name: "Ocean Modeling",
    shortName: "Ocean Modeling",
    x: 0.22,
    y: 0.64,
    z: 0.55,
    category: "Physics",
    whyItMatters:
      "Oceans absorb ~30% of CO₂ and >90% of excess heat. Better ocean models → better climate projections and marine ecosystem management.",
    whyItsHard:
      "Multi-scale turbulent flows, biogeochemistry coupling, ice-ocean interactions. Sparse observational data in the deep ocean.",
    overlooked: "Yes",
    startupAngle:
      "Ocean digital twin for aquaculture, shipping, and offshore energy — combining ML with ocean physics.",
    tags: ["simulation", "physics", "earth"],
    definition:
      "ML-augmented ocean circulation models for forecasting and climate projection, including parameterization of subgrid processes, coupled ocean-atmosphere dynamics, and acceleration of coastal/regional models.",
    bottleneck:
      "Multi-scale turbulent dynamics; coupling with biogeochemistry and sea ice; sparse deep-ocean observations; error accumulation in autoregressive forecasts; preserving thermohaline circulation.",
    currentSota:
      "Hybrid physics-AI coupled frameworks; Ola (Spherical FNO for ocean-atmosphere); NeuralOM (Progressive Residual Correction, 60-day S2S); 4D Swin Transformer surrogates (450× speedup for ROMS).",
    solvedState:
      "Operational ocean models with ML parameterizations that match observational statistics; subseasonal-to-seasonal forecasts competitive with physics-only; digital twins for coastal management.",
    symmetries: ["Rotational invariance (Coriolis)","Boussinesq approximation (incompressibility)","Thermodynamic consistency"],
    benchmarks: ["OGCM reanalysis (e.g., ORAS5)","Subseasonal forecast skill (S2S)","Sea surface temperature RMSE","Meridional overturning circulation"],
    papers: [
      { title: "A Framework for Hybrid Physics-AI Coupled Ocean Models", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2510.22676" },
      { title: "Coupled Ocean-Atmosphere Dynamics in a Machine Learning Earth System Model", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2406.08632" },
      { title: "NeuralOM: Neural Ocean Model for Subseasonal-to-Seasonal Simulation", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2505.21020" },
    ],
  },
  seismology: {
    id: "seismology",
    name: "Seismology & Earthquake Prediction",
    shortName: "Seismology",
    x: 0.14,
    y: 0.56,
    z: 0.48,
    category: "Physics",
    whyItMatters:
      "Earthquake early warning and risk assessment save lives. Better seismic inversion → oil/gas exploration and geothermal energy.",
    whyItsHard:
      "Earthquake prediction remains elusive. Seismic wave propagation is complex (heterogeneous media, attenuation). Sparse station networks.",
    overlooked: "Yes",
    startupAngle:
      "ML-augmented seismic monitoring for earthquake early warning and subsurface imaging (geothermal, CCS).",
    tags: ["simulation", "physics", "earth"],
    definition:
      "ML for seismic event discrimination (earthquake vs. explosion vs. noise), seismic phase picking, seismic inversion for subsurface structure, and earthquake early warning—improving monitoring and hazard assessment.",
    bottleneck:
      "Earthquake prediction remains fundamentally difficult (Poissonian statistics); temporal generalization (models degrade on future data); sparse networks and heterogeneous media; interpretability for operational use.",
    currentSota:
      "Spectrogram-based CNNs for event discrimination (92%+ accuracy); EPBench for short-term prediction; EQTransformer, PhaseNet for phase picking; Bayesian and neural network inversion.",
    solvedState:
      "Reliable real-time event classification and early warning with calibrated uncertainty. Operational deployment in national networks. Interpretable features for regulatory acceptance.",
    symmetries: ["Reciprocity (source-receiver)","Elastic wave equation symmetries","Time-translation invariance (stationary media)"],
    benchmarks: ["EPBench (short-term earthquake prediction)","STEAD (earthquake detection)","Seismic event discrimination (4-way)","PhaseNet/PhasePicker accuracy"],
    papers: [
      { title: "Exploration of Machine Learning Methods to Seismic Event Discrimination in the Pacific Northwest", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2510.23795" },
      { title: "EPBench: A Benchmark for Short-term Earthquake Prediction", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2505.15588" },
      { title: "EQTransformer: Earthquake detection with multi-task learning", authors: "Mousavi et al.", year: 2020, link: "https://arxiv.org/abs/2103.03821" },
    ],
  },
  grav_waves: {
    id: "grav_waves",
    name: "Gravitational Wave Detection",
    shortName: "Grav Waves",
    x: 0.08,
    y: 0.50,
    z: 0.4,
    category: "Physics",
    whyItMatters:
      "LIGO/Virgo opened a new window on the universe. ML can accelerate signal detection and parameter estimation from noisy interferometer data.",
    whyItsHard:
      "Signals are buried in complex instrumental noise. Need real-time low-latency detection. Template banks are computationally expensive.",
    overlooked: "Yes",
    startupAngle:
      "Real-time ML pipeline for gravitational wave detection — could become standard infrastructure for next-gen observatories.",
    tags: ["simulation", "physics"],
    definition:
      "ML for real-time detection and parameter estimation of gravitational waves from compact binary coalescences (CBC) in LIGO/Virgo/KAGRA data, reducing latency and improving sensitivity compared to matched filtering.",
    bottleneck:
      "Complex instrumental noise (glitches); real-time low-latency requirements; template bank coverage; calibration uncertainty; distribution shift between simulated and real data.",
    currentSota:
      "cWB-ML (coherent WaveBurst + ML, ~20% efficiency gain); fully ML CBC pipeline for stellar BHBH; ML inference for BNS in ~1 s with improved localization; DINGO for likelihood-free inference.",
    solvedState:
      "ML-first pipelines with sensitivity matching or exceeding matched filtering; sub-second parameter estimation for BNS for electromagnetic follow-up; robust to glitches and calibration errors.",
    symmetries: ["Lorentz invariance","Gauge invariance (GW polarization)","Time translation"],
    benchmarks: ["LIGO Open Data (GWTC catalogs)","False alarm rate vs. sensitive distance","Parameter estimation accuracy (chirp mass, etc.)","Latency (time to detection)"],
    papers: [
      { title: "A machine-learning pipeline for real-time detection of gravitational waves from compact binary coalescences", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2403.18661" },
      { title: "Real-time gravitational-wave inference for binary neutron stars using machine learning", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2407.09602" },
      { title: "Search for binary black hole mergers in the third observing run of Advanced LIGO-Virgo using coherent WaveBurst enhanced with machine learning", authors: "Krishnan et al.", year: 2022, link: "https://arxiv.org/abs/2201.01495" },
    ],
  },
  wildfire: {
    id: "wildfire",
    name: "Wildfire Prediction",
    shortName: "Wildfire Prediction",
    x: 0.26,
    y: 0.44,
    z: 0.5,
    category: "Physics",
    whyItMatters:
      "Wildfires cause billions in damage annually and are increasing with climate change. Prediction models can save lives and property.",
    whyItsHard:
      "Depends on weather, vegetation, topography, and human factors. Chaotic fire spread dynamics. Sparse historical data for extreme events.",
    overlooked: "Medium",
    startupAngle:
      "AI wildfire risk prediction for insurance, utilities, and emergency management — growing market due to climate change.",
    tags: ["simulation", "physics", "earth"],
    definition:
      "ML models for wildfire spread prediction, ignition risk, and burn area forecasting using remote sensing, meteorological data, vegetation, topography, and historical fire records.",
    bottleneck:
      "Chaotic fire-atmosphere coupling; rare extreme events with few training examples; heterogeneous fuels and topography; real-time data integration; interpretability for emergency management.",
    currentSota:
      "WSTS+ benchmark (8-year data, multi-day input); MFiSP (multimodal: FIRMS, social media); FireScope (VLM + chain-of-thought); autoregressive CGAN for spread; ConvLSTM and transformer architectures.",
    solvedState:
      "Operational next-day and multi-day fire spread forecasts with calibrated uncertainty; integration into emergency dispatch; reliable for insurance and land management.",
    symmetries: ["Spatial translation invariance (homogeneous fuels)","Temporal causality (fire propagates forward)"],
    benchmarks: ["WSTS+ (wildfire spread)","FIRMS detection accuracy","Burn area RMSE","Ignition risk ROC-AUC"],
    papers: [
      { title: "FireScope: Wildfire Risk Prediction with a Chain-of-Thought Oracle", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2511.17171" },
      { title: "MFiSP: A Multimodal Fire Spread Prediction Framework", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2510.23934" },
      { title: "Next-day wildfire spread prediction with historical temporal patterns and satellite observations", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2502.12003" },
    ],
  },
  dark_matter: {
    id: "dark_matter",
    name: "Dark Matter / High Energy Physics",
    shortName: "Dark Matter / HEP",
    x: 0.20,
    y: 0.38,
    z: 0.62,
    category: "Physics",
    whyItMatters:
      "~85% of matter is dark. ML can help detect rare events in particle physics experiments and constrain dark matter models.",
    whyItsHard:
      "Extreme needle-in-haystack problem. Systematic uncertainties dominate. Need ML that's robust to distribution shift between simulation and real data.",
    overlooked: "Medium",
    startupAngle:
      "ML-powered data analysis pipelines for particle physics — could also apply to rare event detection in other domains.",
    tags: ["simulation", "physics"],
    definition:
      "ML for model-independent anomaly detection and rare event identification in particle physics experiments (LHC, direct detection), searching for beyond-Standard-Model signals including dark matter without prior specification of signal topology.",
    bottleneck:
      "Systematic uncertainties and simulation-data mismatch; high background rates; need for model-independent search that doesn't miss unexpected signatures; robust multi-background training.",
    currentSota:
      "ATLAS unsupervised anomaly detection (autoencoders on invariant mass); Dark Machines Anomaly Score Challenge; multi-background representation learning; DDD (Discriminatory Detection of Distortions).",
    solvedState:
      "Model-independent anomaly detection with well-calibrated significance; discovery of new resonances or exotic signatures; reduced sensitivity to simulation imperfections.",
    symmetries: ["Lorentz invariance","Gauge invariance (SM)","CP symmetry (where applicable)"],
    benchmarks: ["Dark Machines Anomaly Score Challenge","ATLAS/CMS public datasets","LHC Olympics","Anomaly detection efficiency vs. background rejection"],
    papers: [
      { title: "Search for new phenomena in two-body invariant mass distributions using unsupervised machine learning for anomaly detection at sqrt(s)=13 TeV with the ATLAS detector", authors: "ATLAS Collaboration", year: 2023, link: "https://arxiv.org/abs/2307.01612" },
      { title: "Robust Anomaly Detection for Particle Physics Using Multi-Background Representation Learning", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2401.08777" },
      { title: "The Dark Machines Anomaly Score Challenge: Benchmark Data and Model Independent Event Classification for the Large Hadron Collider", authors: "Heinz et al.", year: 2021, link: "https://arxiv.org/abs/2105.14027" },
    ],
  },
  astro_transients: {
    id: "astro_transients",
    name: "Astronomical Transients",
    shortName: "Astro Transients",
    x: 0.16,
    y: 0.32,
    z: 0.4,
    category: "Physics",
    whyItMatters:
      "Upcoming surveys (LSST) will detect millions of transient events per night. Need automated classification and follow-up prioritization.",
    whyItsHard:
      "Heterogeneous, sparse, irregularly sampled light curves. Real-time classification under extreme data volume. Few labeled examples for rare types.",
    overlooked: "Medium",
    startupAngle:
      "Astronomical event broker with ML classification — infrastructure for the LSST era.",
    tags: ["simulation", "physics"],
    definition:
      "ML for automated classification of astronomical transients (supernovae, TDEs, AGN, etc.) from time-domain surveys (ZTF, LSST), enabling real-time follow-up prioritization and discovery of rare events.",
    bottleneck:
      "Sparse, irregularly sampled light curves; class imbalance (rare transients); real-time processing under millions of alerts/night; generalization to new survey cadences and filters.",
    currentSota:
      "BTSbot (CNN for ZTF bright transients, 99% completeness, automated spectroscopic follow-up); ZTF SCoPe; recurrent/transformer models for light curves; PLAsTiCC dataset.",
    solvedState:
      "Fully automated discovery-to-classification pipeline; real-time spectroscopic follow-up triggers; LSST-era brokers with sub-minute classification; high recall for rare classes.",
    symmetries: ["Time translation (homogeneous light curve statistics)","Flux scaling (different distances)"],
    benchmarks: ["PLAsTiCC (transient classification)","ZTF Bright Transient Survey","LSST alert streams (simulated)","BTSbot completeness vs. human scanning"],
    papers: [
      { title: "The Zwicky Transient Facility Bright Transient Survey. III. BTSbot: Automated Identification and Follow-up of Bright Transients with Deep Learning", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2401.15167" },
      { title: "BTSbot: A Multi-input Convolutional Neural Network to Automate and Expedite Bright Transient Identification for the Zwicky Transient Facility", authors: "Various", year: 2023, link: "https://arxiv.org/abs/2307.07618" },
      { title: "The PLAsTiCC team and pipeline: A transient and variable star classification pipeline for the Rubin Observatory", authors: "Various", year: 2019, link: "https://doi.org/10.3847/1538-4365/ab4f2e" },
    ],
  },
  weather_forecasting: {
    id: "weather_forecasting",
    name: "Weather Forecasting",
    shortName: "Weather Forecasting",
    x: 0.74,
    y: 0.68,
    z: 0.3,
    category: "Physics",
    whyItMatters:
      "ML weather models (GraphCast, Pangu, GenCast) now rival or beat physics-based NWP. But medium-range and extreme event prediction still need work.",
    whyItsHard:
      "Capturing tail events. Ensemble generation for uncertainty. Integration with existing meteorological workflows and data assimilation.",
    overlooked: "Getting Crowded",
    startupAngle:
      "Several well-funded efforts (Google, Huawei, ECMWF). Hard to compete on global models, but niche applications (agriculture, energy) have room.",
    tags: ["simulation", "physics", "earth"],
    definition:
      "ML models that predict global weather variables autoregressively from reanalysis or assimilation state, rivaling or exceeding numerical weather prediction (NWP) in medium-range skill at orders-of-magnitude lower cost.",
    bottleneck:
      "Extreme event prediction (tails); ensemble generation for uncertainty; data assimilation integration; subseasonal and seasonal extension; operational latency and reliability.",
    currentSota:
      "GraphCast (GNN, 10-day forecast, 89% better than HRES); Pangu-Weather (3DEST, 0.25°, first AI to beat NWP across variables); FourCastNet; GenCast (diffusion ensemble); FengWu.",
    solvedState:
      "Operational ML weather models integrated into national forecasting centers; reliable ensemble predictions for extremes; subseasonal-to-seasonal skill comparable to NWP.",
    symmetries: ["Spatial translation (global)","Rotational invariance (sphere)","Conservation laws (mass, energy, moisture)"],
    benchmarks: ["ECMWF HRES comparison","WeatherBench 2","Tropical cyclone tracking","Extreme precipitation/temperature"],
    papers: [
      { title: "Learning skillful medium-range global weather forecasting", authors: "Lam et al. (GraphCast)", year: 2022, link: "https://arxiv.org/abs/2212.12794" },
      { title: "Pangu-Weather: A 3D High-Resolution Model for Fast and Accurate Global Weather Forecast", authors: "Bi et al. (Huawei)", year: 2022, link: "https://arxiv.org/abs/2211.02556" },
      { title: "Accurate medium-range global weather forecasting with 3D neural networks", authors: "Bi et al.", year: 2023, link: "https://doi.org/10.1038/s41586-023-06185-3" },
    ],
  },
  pinns: {
    id: "pinns",
    name: "Physics-Informed Neural Networks (PINNs)",
    shortName: "PINNs",
    x: 0.70,
    y: 0.36,
    z: 0.35,
    category: "Physics",
    whyItMatters:
      "Embed physical laws directly into neural network training via PDE residual losses. Promising for data-scarce regimes.",
    whyItsHard:
      "Training instabilities (stiff multi-objective loss). Often slower than classical solvers for well-posed problems. Generalization is limited.",
    overlooked: "Crowded",
    startupAngle:
      "Many papers but few practical wins. Neural operators (FNO) have largely overtaken PINNs for most applications.",
    tags: ["simulation", "physics", "crowded"],
    definition:
      "Neural networks trained with PDE residual terms in the loss, encoding physical laws (conservation, boundary conditions) as soft constraints. Enables data-efficient solution of forward and inverse PDE problems.",
    bottleneck:
      "Training instability from multi-objective loss balancing; slow convergence vs. classical solvers for well-posed problems; limited generalization; difficulty with stiff/high-frequency solutions.",
    currentSota:
      "Original Raissi-Karniadakis PINNs; hp-VPINNs, gPINNs; causal training; Fourier feature networks; separate loss weighting; increasingly surpassed by neural operators (FNO) for many applications.",
    solvedState:
      "PINNs that train stably, generalize well, and outperform classical methods in data-scarce or inverse settings. Practical deployment for design and inverse problems where data is expensive.",
    symmetries: ["PDE-specific symmetries (embedded in residual)","Boundary condition enforcement","Conservation law preservation (when encoded)"],
    benchmarks: ["Burgers equation","Navier-Stokes (2D lid-driven cavity)","Heat equation","Inverse problem reconstruction"],
    papers: [
      { title: "Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations", authors: "Raissi, Perdikaris, Karniadakis", year: 2019, link: "https://arxiv.org/abs/1711.10561" },
      { title: "Physics-informed neural networks (Part II): Data-driven discovery of partial differential equations", authors: "Raissi et al.", year: 2017, link: "https://arxiv.org/abs/1711.10566" },
      { title: "Physics-Informed Neural Networks and Extensions", authors: "Raissi, Perdikaris, Ahmadi, Karniadakis", year: 2024, link: "https://arxiv.org/abs/2408.16806" },
    ],
  },

  // ──────── MATH, QUANTUM & META-SCIENCE ────────
  qec: {
    id: "qec",
    name: "Quantum Error Correction",
    shortName: "Quantum Error Corr",
    x: 0.54,
    y: 0.94,
    z: 0.55,
    category: "Quantum",
    whyItMatters:
      "Without fault-tolerant QEC, quantum computers remain noisy toys. Cracking this unlocks quantum advantage for drug design, optimization, cryptography.",
    whyItsHard:
      "Enormous qubit overhead (1000+ physical qubits per logical qubit). Decoder latency must match hardware cycle time. Surface codes dominate but may not be optimal.",
    overlooked: "Medium-Crowded",
    startupAngle:
      'ML-optimized decoders and code design for specific hardware. Sell to quantum hardware companies or build the "compiler layer" for fault-tolerant quantum.',
    tags: ["quantum", "infrastructure"],
    definition:
      "Using machine learning decoders to correct errors in quantum error correction codes, enabling fault-tolerant quantum computation. ML decoders replace or augment classical decoding algorithms (e.g., minimum-weight perfect matching) to handle correlated noise and improve logical error rates on surface and topological codes.",
    bottleneck:
      "Decoder latency must match hardware cycle times (<1 μs); generalizing to correlated, non-Markovian, and hardware-specific noise; scaling to large code distances (d>7) with limited training data.",
    currentSota:
      "Transformer-based neural decoders for Sycamore surface codes; tensor-network maximum-likelihood decoders for correlated noise; QNN decoders with provable readout error advantages.",
    solvedState:
      "Real-time ML decoders that match or exceed algorithmic decoders across all noise regimes and code distances, enabling scalable fault-tolerant quantum computing without prohibitive qubit overhead.",
    symmetries: ["Code symmetry (stabilizer group)","Permutation invariance (qubit relabeling)","Logical equivalence under code automorphisms"],
    benchmarks: ["Surface code logical error rate (d=3,5)","Sycamore experimental decoder comparisons","Simulated correlated noise benchmarks"],
    papers: [
      { title: "Learning high-accuracy error decoding for quantum processors", authors: "Google Quantum AI", year: 2024, link: "https://doi.org/10.1038/s41586-024-08148-8" },
      { title: "Advantage of Quantum Neural Networks as Quantum Information Decoders", authors: "Chen et al.", year: 2024, link: "https://arxiv.org/abs/2401.06300" },
      { title: "Attention-based neural decoder for quantum error correction", authors: "Various", year: 2023, link: "https://arxiv.org/abs/2310.05900" },
    ],
  },
  theorem_proving: {
    id: "theorem_proving",
    name: "AI for Theorem Proving",
    shortName: "AI Theorem Proving",
    x: 0.46,
    y: 0.88,
    z: 0.65,
    category: "Math",
    whyItMatters:
      "Automate or assist mathematical proof discovery. Verified proofs guarantee correctness — critical for hardware, cryptography, and advancing pure math.",
    whyItsHard:
      "Proofs require creative leaps, not just pattern matching. Search space is infinite and sparse. Current models can handle exercises but struggle with research-level problems.",
    overlooked: "Medium",
    startupAngle:
      "Formal verification engine for hardware/software (Intel, AMD, crypto companies). Proof assistant that 10x accelerates mathematicians.",
    tags: ["reasoning", "math", "infrastructure"],
    definition:
      "Automating the discovery and verification of mathematical proofs using AI, typically in formal proof assistants (Lean, Isabelle, Coq). Combines neural proof search, retrieval-augmented generation, and reinforcement learning to construct machine-checkable proofs of mathematical statements.",
    bottleneck:
      "Search space is infinite and sparse; creative proof steps require genuine mathematical insight; scaling from exercises to research-level open problems; bridging informal reasoning with formal verification.",
    currentSota:
      "AlphaProof (IMO silver medal 2024, formal verification); STP (self-play LLM provers, 28.5% on LeanWorkbook); Aristotle (gold-equivalent IMO 2025); AlphaGeometry for Olympiad geometry.",
    solvedState:
      "AI systems that routinely prove novel research-level theorems, generate human-readable proofs, and collaborate with mathematicians to advance open problems—with formal verification guaranteeing correctness.",
    symmetries: ["Proof structure equivalence (reordering of lemmas)","Term permutation in commutative contexts","Logical equivalence under deduction rules"],
    benchmarks: ["miniF2F","ProofNet","LeanWorkbook","FormalMATH","PutnamBench","IMO (International Mathematical Olympiad)"],
    papers: [
      { title: "Olympiad-Level Formal Mathematical Reasoning with Reinforcement Learning", authors: "DeepMind", year: 2025, link: "https://doi.org/10.1038/s41586-025-09833-y" },
      { title: "STP: Self-play LLM Theorem Provers with Iterative Conjecturing and Proving", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2502.00212" },
      { title: "Aristotle: IMO-level Automated Theorem Proving", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2510.01346" },
    ],
  },
  agentic_scientists: {
    id: "agentic_scientists",
    name: "Agentic Scientists",
    shortName: "Agentic Scientists",
    x: 0.50,
    y: 0.82,
    z: 0.72,
    category: "Meta-Science",
    whyItMatters:
      "AI systems that autonomously form hypotheses, design experiments, interpret results, and iterate — the ultimate scientific productivity multiplier.",
    whyItsHard:
      "Requires integrating LLM reasoning, domain-specific generative models, tool use, and experimental feedback loops. Verification of scientific claims is hard.",
    overlooked: "Medium",
    startupAngle:
      "The 'AlphaGo for science' play. FutureHouse is one attempt, but the design space is vast and the field is nascent.",
    tags: ["agents", "reasoning", "infrastructure"],
    definition:
      "Autonomous AI systems that form hypotheses, design experiments, execute protocols (via lab automation), analyze results, and iterate—conducting scientific discovery with minimal human intervention.",
    bottleneck:
      "Integrating reasoning, tool use, and experimental feedback; verification of scientific claims; handling noisy/incomplete experimental data; scaling to complex multi-step research programs.",
    currentSota:
      "Coscientist (autonomous chemistry experiments, GPT-4); AI Co-Scientist (DeepMind Gemini, drug repurposing validated in vitro); AI Cosmologist for data analysis pipelines.",
    solvedState:
      "AI agents that autonomously conduct end-to-end research programs—hypothesis → experimental design → execution → analysis → publication—with validated discoveries and reproducible workflows.",
    symmetries: ["Experimental design permutation (equivalent protocols)","Hypothesis space ordering","Modular agent composition"],
    benchmarks: ["Palladium-catalyzed cross-coupling optimization","Drug repurposing validation (acute myeloid leukemia)","Novel target discovery (epigenetic targets)"],
    papers: [
      { title: "Autonomous chemical research with large language models", authors: "Boiko et al.", year: 2023, link: "https://doi.org/10.1038/s41586-023-06792-0" },
      { title: "AI Co-Scientist: Multi-agent systems for scientific discovery", authors: "DeepMind", year: 2025, link: "https://arxiv.org/abs/2504.03424" },
      { title: "Scaling scientific discovery with AI agents", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2406.13114" },
    ],
  },
  quantum_sim: {
    id: "quantum_sim",
    name: "Quantum Simulation of Materials",
    shortName: "Quantum Sim",
    x: 0.34,
    y: 0.78,
    z: 0.78,
    category: "Quantum",
    whyItMatters:
      "Simulate strongly correlated quantum systems (superconductors, catalysts, exotic materials) where classical methods fail fundamentally.",
    whyItsHard:
      "Requires actual quantum hardware or clever classical-quantum hybrid methods. Variational approaches hit barren plateaus. Noise kills coherence.",
    overlooked: "Medium",
    startupAngle:
      "Hybrid classical-quantum simulation platform for materials R&D. Near-term: classical ML surrogates trained on small quantum calculations.",
    tags: ["quantum", "simulation", "materials"],
    definition:
      "Simulating strongly correlated quantum many-body systems (e.g., high-Tc superconductors, Mott insulators, correlated materials) using quantum computers or hybrid quantum-classical methods, where classical approaches (exact diagonalization, DMRG) fail due to exponential scaling.",
    bottleneck:
      "Impurity solver in DMFT scales exponentially classically; barren plateaus in variational approaches; noise limits coherence on NISQ devices; bridging quantum simulation to real material properties.",
    currentSota:
      "DMFT with quantum impurity solvers (VQE, variational) on superconducting/trapped-ion hardware; hybrid DFT+DMFT on IBM quantum processors; Gaussian state methods for Green's functions.",
    solvedState:
      "Reliable simulation of strongly correlated materials (e.g., cuprates, iron-based superconductors) with predictive power for phase diagrams, spectral functions, and response properties—at scale inaccessible to classical methods.",
    symmetries: ["Gauge invariance","Time-reversal symmetry","Spin rotation invariance","Translational invariance (momentum space)"],
    benchmarks: ["Hubbard model ground state","DMFT impurity problem","Real materials (e.g., Ca₂CuO₂Cl₂)"],
    papers: [
      { title: "Dynamical Mean Field Theory for Real Materials on a Quantum Computer", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2404.09527" },
      { title: "Dynamical mean field theory algorithm and experiment on quantum computers", authors: "Various", year: 2019, link: "https://arxiv.org/abs/1910.04735" },
      { title: "A quantum computing approach to efficiently simulating correlated materials", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2508.05738" },
    ],
  },
  algorithm_discovery: {
    id: "algorithm_discovery",
    name: "Algorithm Discovery",
    shortName: "Algorithm Discovery",
    x: 0.26,
    y: 0.74,
    z: 0.7,
    category: "Math",
    whyItMatters:
      "Use AI to discover faster algorithms (matrix multiplication, sorting, optimization). AlphaEvolve showed this is possible.",
    whyItsHard:
      "Vast search space of possible programs. Need to verify correctness and optimality. Defining the right reward signal is non-trivial.",
    overlooked: "Medium",
    startupAngle:
      "AI-discovered algorithms for specific hardware targets — sell compiler optimizations to chip companies.",
    tags: ["reasoning", "math"],
    definition:
      "Using AI (typically reinforcement learning) to discover novel, provably correct algorithms that outperform human-designed baselines—e.g., faster matrix multiplication, improved sorting, or optimization routines.",
    bottleneck:
      "Vast search space of programs; verifying correctness and optimality; defining reward signals that capture both speed and generality; bridging symbolic program search to executable code.",
    currentSota:
      "AlphaTensor (faster matrix multiplication via tensor decomposition, improved on Strassen for 4×4); OpenTensor reproduction; program synthesis via RL for sorting and other routines.",
    solvedState:
      "AI that routinely discovers algorithms matching or beating human/computer-science best for well-defined problems, with automated verification and hardware-aware optimization.",
    symmetries: ["Algorithmic equivalence (semantic equivalence)","Tensor decomposition symmetry","Commutative/associative reordering"],
    benchmarks: ["Matrix multiplication complexity","Strassen-style tensor rank","Sorting network depth"],
    papers: [
      { title: "Discovering faster matrix multiplication algorithms with reinforcement learning", authors: "Fawzi et al. (DeepMind)", year: 2022, link: "https://doi.org/10.1038/s41586-022-05172-4" },
      { title: "Discovering novel algorithms with AlphaTensor", authors: "DeepMind", year: 2022, link: "https://arxiv.org/abs/2210.04051" },
      { title: "OpenTensor: Reproducing Faster Matrix Multiplication Discovering Algorithms", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2405.20748" },
    ],
  },
  conjecture_gen: {
    id: "conjecture_gen",
    name: "Conjecture Generation",
    shortName: "Conjecture Gen",
    x: 0.18,
    y: 0.70,
    z: 0.8,
    category: "Math",
    whyItMatters:
      "AI that generates novel mathematical conjectures — not just proves them. Could accelerate pure mathematics by suggesting unexpected connections.",
    whyItsHard:
      "What makes a conjecture 'interesting'? Need to balance novelty, difficulty, and significance. Very few successful examples so far.",
    overlooked: "Yes",
    startupAngle:
      "Research tool for mathematicians — AI collaborator that suggests conjectures and proof strategies.",
    tags: ["reasoning", "math"],
    definition:
      "AI systems that generate novel, plausible mathematical conjectures—formulas, relationships, or statements—from numerical computation or pattern matching, often for constants, sequences, or algebraic structures.",
    bottleneck:
      "Defining 'interesting' or 'significant' conjectures; avoiding trivial or known results; bridging from numerical patterns to formally provable statements; balancing novelty with tractability.",
    currentSota:
      "Ramanujan Machine (continued fractions for π, e, zeta; MITM and gradient descent); integer sequence analysis (ESMA); formula discovery for fundamental constants.",
    solvedState:
      "AI that generates conjectures of genuine mathematical interest—leading to new theorems and insights—with automated verification where possible and human collaboration for proof.",
    symmetries: ["Numerical equivalence","Continued fraction equivalence","Sequence transformation invariance"],
    benchmarks: ["Fundamental constant formulas (π, e, Catalan)","Riemann zeta values","Integer sequence conjectures"],
    papers: [
      { title: "The Ramanujan Machine: Automatically Generated Conjectures on Fundamental Constants", authors: "Raayoni et al.", year: 2019, link: "https://arxiv.org/abs/1907.00205" },
      { title: "Generating conjectures on fundamental constants with the Ramanujan Machine", authors: "Raayoni et al.", year: 2021, link: "https://doi.org/10.1038/s41586-021-03229-4" },
      { title: "Automated Search for Conjectures on Mathematical Constants using Analysis of Integer Sequences", authors: "Razon et al.", year: 2023, link: "https://proceedings.mlr.press/v202/razon23a.html" },
    ],
  },
  scientific_rl: {
    id: "scientific_rl",
    name: "Verifiable Rewards for Scientific RL",
    shortName: "Scientific RL",
    x: 0.32,
    y: 0.68,
    z: 0.58,
    category: "Math",
    whyItMatters:
      "RL works spectacularly when you can verify solutions cheaply. Science has many such problems: does this molecule dock? Does this proof check?",
    whyItsHard:
      "Defining reward functions that capture real scientific merit. Verification can be expensive. Sparse rewards in long-horizon discovery tasks.",
    overlooked: "Yes",
    startupAngle:
      "RL-powered scientific discovery engine that generates and verifies hypotheses autonomously.",
    tags: ["rl", "reasoning", "infrastructure"],
    definition:
      "Reinforcement learning where rewards are verifiable scientific outcomes—e.g., a proof checks in Lean, a molecule docks in a pocket, an equation fits data. Enables autonomous exploration of hypothesis spaces with ground-truth feedback.",
    bottleneck:
      "Sparse rewards in long-horizon discovery; verification can be expensive (synthesis, simulation); defining reward functions that capture real scientific merit; balancing exploration with exploitation.",
    currentSota:
      "AlphaZero-style RL for theorem proving; RL for retrosynthesis and molecular design; RL with verification in program synthesis; expert iteration with verified feedback.",
    solvedState:
      "RL systems that autonomously discover verified scientific results—proofs, molecules, equations—at scale, with reward signals that align with human scientific judgment.",
    symmetries: ["State equivalence under verification","Action symmetry (equivalent exploration steps)","Reward shaping invariance"],
    benchmarks: ["Theorem proving pass@k","Molecular design with docking verification","Equation rediscovery (Feynman, SRSD)"],
    papers: [
      { title: "Expert iteration: Capitalising on expert knowledge through reinforcement learning", authors: "Anthony et al.", year: 2017, link: "https://arxiv.org/abs/1705.08439" },
      { title: "Reinforcement Learning for Scientific Discovery", authors: "Various", year: 2023, link: "https://arxiv.org/abs/2302.13178" },
    ],
  },
  symbolic_regression: {
    id: "symbolic_regression",
    name: "Symbolic Regression & Equation Discovery",
    shortName: "Symbolic Regression",
    x: 0.24,
    y: 0.64,
    z: 0.55,
    category: "Math",
    whyItMatters:
      "Discover interpretable governing equations from data. The dream: point a model at experimental data and recover Newton's laws.",
    whyItsHard:
      "Search over expression trees is combinatorially hard. Balancing complexity and fit. Noisy, partial data. Current methods fail on high-dimensional systems.",
    overlooked: "Yes",
    startupAngle:
      "Automated scientific law discovery platform. Sell to pharma (PK/PD models), engineering (constitutive laws), and finance.",
    tags: ["reasoning", "math", "infrastructure"],
    definition:
      "Discovering interpretable mathematical expressions (equations, formulas) that explain data, as opposed to black-box models. Searches over expression trees to find parsimonious fits that balance accuracy and complexity.",
    bottleneck:
      "Combinatorial search over expression space; noisy and partial data; balancing complexity vs. fit (regularization); scaling to high-dimensional systems; avoiding overfitting to spurious patterns.",
    currentSota:
      "AI Feynman (physics-inspired, 90% on Feynman equations); SRSD benchmark with NED metric; MDLformer-guided search; genetic programming + semantic search; transformer-based SR.",
    solvedState:
      "Given noisy experimental data, reliably recover governing equations (e.g., physical laws, constitutive relations) with proper uncertainty quantification and minimal human intervention.",
    symmetries: ["Algebraic equivalence (commutativity, associativity)","Unit invariance","Variable substitution invariance"],
    benchmarks: ["SRSD (120 Feynman equations)","Feynman Symbolic Regression Database","SRBench","AI Feynman benchmark"],
    papers: [
      { title: "AI Feynman: a Physics-Inspired Method for Symbolic Regression", authors: "Udrescu, Tegmark", year: 2020, link: "https://arxiv.org/abs/1905.11481" },
      { title: "Rethinking Symbolic Regression Datasets and Benchmarks for Scientific Discovery", authors: "Matsubara et al.", year: 2022, link: "https://arxiv.org/abs/2206.10540" },
      { title: "Contemporary Symbolic Regression Methods and their Relative Performance", authors: "La Cava et al.", year: 2021, link: "https://arxiv.org/abs/2107.14351" },
    ],
  },
  manifold_learning: {
    id: "manifold_learning",
    name: "Learning on Manifolds & Geometric Priors",
    shortName: "Manifold Learning",
    x: 0.14,
    y: 0.58,
    z: 0.52,
    category: "Math",
    whyItMatters:
      "Many scientific data live on non-Euclidean spaces (rotations, tori, symmetric spaces). Ignoring geometry wastes data and breaks symmetries.",
    whyItsHard:
      "Defining proper distributions, flows, and diffusion processes on general manifolds. Computing Jacobians. Efficient parameterization.",
    overlooked: "Yes",
    startupAngle:
      "Geometry-aware generative modeling toolkit. Foundational infrastructure layer that every molecular/materials AI company needs.",
    tags: ["reasoning", "math", "infrastructure"],
    definition:
      "Machine learning on data living on non-Euclidean manifolds (e.g., rotations SO(3), spheres S^n, symmetric positive-definite matrices, tori). Uses geometric structure to define distributions, flows, and equivariant architectures.",
    bottleneck:
      "Defining proper probability distributions and diffusion on general manifolds; computing Jacobians and volume elements; efficient parameterization; scaling to high-dimensional manifolds.",
    currentSota:
      "Equivariant networks (E3NN, SchNet, EGNN); diffusion models on manifolds (Riemannian score matching); geometric deep learning; flows on Lie groups.",
    solvedState:
      "Universal geometry-aware generative and discriminative models for scientific data (molecules, materials, proteins) that respect underlying symmetries and achieve provably better sample efficiency.",
    symmetries: ["SE(3) equivariance (3D roto-translations)","Permutation invariance","Manifold-specific invariances (e.g., SO(3), SPD)"],
    benchmarks: ["QM9, MD17 (molecular)","Rotation-invariant tasks","Manifold interpolation quality"],
    papers: [
      { title: "E(n) Equivariant Graph Neural Networks", authors: "Satorras et al.", year: 2021, link: "https://arxiv.org/abs/2102.09844" },
      { title: "Riemannian Score-Based Generative Modeling", authors: "De Bortoli et al.", year: 2022, link: "https://arxiv.org/abs/2202.02763" },
    ],
  },
  causal_discovery: {
    id: "causal_discovery",
    name: "Causal Discovery",
    shortName: "Causal Discovery",
    x: 0.20,
    y: 0.52,
    z: 0.55,
    category: "Math",
    whyItMatters:
      "Infer causal relationships from observational data. Essential for understanding mechanisms, not just correlations, in science.",
    whyItsHard:
      "Causal discovery from observational data alone requires strong assumptions. Scaling to high dimensions. Handling hidden confounders.",
    overlooked: "Medium",
    startupAngle:
      "Causal AI platform for drug target identification and clinical trial design — move beyond correlation-based approaches.",
    tags: ["reasoning", "math"],
    definition:
      "Inferring causal structure (e.g., directed graphs, DAGs) from observational data, identifying cause-effect relationships rather than mere correlations. Essential for mechanism understanding, interventions, and policy.",
    bottleneck:
      "Identifiability requires strong assumptions (e.g., faithfulness, no latent confounders); scaling to high dimensions; handling cycles and latent variables; from observational data alone, only Markov equivalence classes are identifiable.",
    currentSota:
      "PC, GES, FCI algorithms; neural causal discovery (DAG with continuous optimization); CausalBench (gene networks from single-cell perturbations); OCDB; CausalRivers for time-series.",
    solvedState:
      "Reliable causal graph recovery from observational data for high-dimensional systems, with quantified uncertainty and valid under realistic assumptions (confounding, selection bias).",
    symmetries: ["Markov equivalence (DAGs with same d-separation)","Variable permutation","Graph isomorphism"],
    benchmarks: ["CausalBench","OCDB","CausalRivers","CauseMe.net","Synthetic DAG benchmarks"],
    papers: [
      { title: "The CausalBench challenge: A machine learning contest for gene network inference", authors: "Various", year: 2023, link: "https://arxiv.org/abs/2308.15395" },
      { title: "OCDB: Revisiting Causal Discovery with a Comprehensive Benchmark", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2406.04598" },
    ],
  },
  uncertainty_quant: {
    id: "uncertainty_quant",
    name: "Uncertainty Quantification",
    shortName: "Uncertainty Quant",
    x: 0.30,
    y: 0.46,
    z: 0.38,
    category: "Math",
    whyItMatters:
      "Scientific ML predictions are useless without reliable uncertainty estimates. Critical for safety-critical applications.",
    whyItsHard:
      "Calibrated uncertainty in deep learning is an open problem. Epistemic vs. aleatoric uncertainty. Distributional shift detection.",
    overlooked: "Medium",
    startupAngle:
      "UQ-as-a-service layer for any ML model — sell confidence intervals alongside predictions.",
    tags: ["reasoning", "infrastructure"],
    definition:
      "Providing calibrated, reliable uncertainty estimates for scientific ML predictions—distinguishing epistemic (model) from aleatoric (data) uncertainty, with coverage guarantees for intervals and proper calibration.",
    bottleneck:
      "Deep networks are typically overconfident; epistemic and aleatoric uncertainty are conflated; distribution shift breaks calibration; physics-informed UQ (e.g., for PDEs) requires different frameworks.",
    currentSota:
      "Conformal prediction; calibrated density estimation; physics-informed conformal prediction for PDEs; CLEAR for epistemic/aleatoric separation; evidential deep learning.",
    solvedState:
      "Any scientific ML model outputs prediction intervals with guaranteed coverage (e.g., 90% of intervals contain the true value), with proper calibration under distribution shift.",
    symmetries: ["Calibration invariance","Output permutation (for multi-output)"],
    benchmarks: ["Coverage and sharpness","ECE (Expected Calibration Error)","Physics-informed UQ benchmarks"],
    papers: [
      { title: "Calibrated and Sharp Uncertainties in Deep Learning via Density Estimation", authors: "Various", year: 2021, link: "https://arxiv.org/abs/2112.07184" },
      { title: "Calibrated Physics-Informed Uncertainty Quantification", authors: "Various", year: 2025, link: "https://arxiv.org/abs/2502.04406" },
    ],
  },
  peft_sci_fms: {
    id: "peft_sci_fms",
    name: "Continual Learning / PEFT for Science FMs",
    shortName: "PEFT for Sci FMs",
    x: 0.16,
    y: 0.42,
    z: 0.32,
    category: "Meta-Science",
    whyItMatters:
      "Fine-tune foundation models to new domains, conditions, or organisms without catastrophic forgetting and with minimal data.",
    whyItsHard:
      "Distribution shift is severe in science (new species, new materials, new conditions). LoRA-style adapters work but theory is thin.",
    overlooked: "Yes",
    startupAngle:
      "Model adaptation platform: take a base protein/chemistry FM and cheaply specialize it for proprietary data.",
    tags: ["infrastructure", "foundation-models"],
    definition:
      "Efficiently adapting foundation models (e.g., protein LMs, chemistry models) to new domains, organisms, or conditions via parameter-efficient fine-tuning (LoRA, adapters) or continual learning, without catastrophic forgetting.",
    bottleneck:
      "Severe distribution shift in science (new species, materials, assays); limited labeled data for new domains; balancing plasticity vs. stability; theory for when PEFT generalizes is thin.",
    currentSota:
      "LoRA, QLoRA for LLMs; adapter-based fine-tuning for protein/chemistry FMs; continual learning for genomics; domain-specific adapters (e.g., Evo adapters for new organisms).",
    solvedState:
      "Cheap, data-efficient specialization of scientific FMs to any new domain—new species, new assays, new materials—with minimal retraining and no forgetting of base capabilities.",
    symmetries: ["Parameter subspace invariance","Adapter composition"],
    benchmarks: ["Domain adaptation accuracy","Catastrophic forgetting metrics","Few-shot fine-tuning (protein, chemistry)"],
    papers: [
      { title: "LoRA: Low-Rank Adaptation of Large Language Models", authors: "Hu et al.", year: 2021, link: "https://arxiv.org/abs/2106.09685" },
      { title: "Parameter-Efficient Fine-Tuning for Foundation Models", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2501.13787" },
    ],
  },
  interpretable_ml: {
    id: "interpretable_ml",
    name: "Interpretable ML for Science",
    shortName: "Interpretable ML",
    x: 0.28,
    y: 0.38,
    z: 0.4,
    category: "Math",
    whyItMatters:
      "Scientists need to understand why a model makes a prediction, not just what it predicts. Interpretability builds trust and generates hypotheses.",
    whyItsHard:
      "Post-hoc explanations are often unreliable. Inherently interpretable models sacrifice performance. Domain-specific interpretability is hard to formalize.",
    overlooked: "Medium",
    startupAngle:
      "Explainable AI toolkit for scientific applications — bridge the trust gap for ML adoption in regulated industries.",
    tags: ["reasoning", "infrastructure"],
    definition:
      "Making scientific ML models interpretable—explaining predictions (feature importance, attention, saliency), ensuring models match domain knowledge, or using inherently interpretable architectures (sparse symbolic models, decision trees).",
    bottleneck:
      "Post-hoc explanations can be unreliable or inconsistent; inherently interpretable models often sacrifice accuracy; domain-specific interpretability (e.g., chemical mechanisms) is hard to formalize.",
    currentSota:
      "SHAP, LIME; attention visualization; concept bottlenecks; neurosymbolic methods; physics-informed interpretability; rule extraction from neural nets.",
    solvedState:
      "Scientific ML models whose predictions come with trustworthy explanations that domain experts can validate and that generate actionable hypotheses.",
    symmetries: ["Explanation equivalence","Feature permutation (for permutation-invariant models)"],
    benchmarks: ["Explanation fidelity","Human evaluation of interpretability","Faithfulness metrics"],
    papers: [
      { title: "A Unified Approach to Interpreting Model Predictions", authors: "Lundberg, Lee (SHAP)", year: 2017, link: "https://arxiv.org/abs/1705.07874" },
      { title: "Concept Bottleneck Models", authors: "Koh et al.", year: 2020, link: "https://arxiv.org/abs/2007.04612" },
    ],
  },
  sci_data_infra: {
    id: "sci_data_infra",
    name: "Scientific Data Infrastructure",
    shortName: "Sci Data Infra",
    x: 0.10,
    y: 0.34,
    z: 0.22,
    category: "Meta-Science",
    whyItMatters:
      "Most experimental data is lost, siloed, or unstructured. ML models are starving for high-quality scientific training data.",
    whyItsHard:
      "Data is heterogeneous (spectra, images, sequences, graphs). No universal schema. Incentives are misaligned (publish, don't share data).",
    overlooked: "Very",
    startupAngle:
      'The "Hugging Face for science" — structured, queryable datasets with provenance.',
    tags: ["infrastructure"],
    definition:
      "Building structured, queryable, and provenance-tracked scientific datasets and infrastructure—enabling ML training, reproducibility, and discovery. 'Hugging Face for science.'",
    bottleneck:
      "Data heterogeneity (spectra, images, sequences, graphs); no universal schema; misaligned incentives (publish over share); legacy formats; sensitive/proprietary data.",
    currentSota:
      "Hugging Face Datasets; Zenodo; Materials Project; OpenFold; domain-specific databases (PDB, UniProt); ML-ready scientific benchmarks.",
    solvedState:
      "Universal, queryable scientific data layer with provenance, standardized schemas, and seamless integration with training pipelines—making scientific data as accessible as web text.",
    symmetries: ["Schema equivalence","Provenance graph invariance"],
    benchmarks: ["Dataset coverage and quality","ML benchmark performance on standardized datasets","Reproducibility rate"],
    papers: [
      { title: "The Materials Project: A materials genome approach", authors: "Jain et al.", year: 2013, link: "https://doi.org/10.1063/1.4812323" },
      { title: "Datasets: A Community Library for Natural Language Processing", authors: "Hugging Face", year: 2020, link: "https://arxiv.org/abs/2002.02916" },
    ],
  },
  reproducibility: {
    id: "reproducibility",
    name: "Scientific Reproducibility Tools",
    shortName: "Reproducibility",
    x: 0.08,
    y: 0.28,
    z: 0.18,
    category: "Meta-Science",
    whyItMatters:
      "Irreproducibility costs ~$28B/year in the US alone. AI that detects statistical errors, flags p-hacking, or auto-generates reproducibility reports has real demand.",
    whyItsHard:
      "Nobody gets citations for making experiments more reproducible. Negative result: no glory.",
    overlooked: "Very",
    startupAngle:
      'Compliance/audit tool for journals, funding agencies, and pharma. Think "Grammarly for scientific rigor."',
    tags: ["infrastructure"],
    definition:
      "Tools and AI for detecting irreproducibility—statistical errors, p-hacking, missing methods, inadequate reporting—and for automating reproducibility assessment (e.g., re-running analyses, checking code availability).",
    bottleneck:
      "Negative incentives (no citations for reproducibility); heterogeneous reporting; detecting subtle statistical flaws; automating replication studies.",
    currentSota:
      "Statcheck; p-curve analysis; automated code/data availability checks; ML for detecting problematic reporting; reproducible workflow tools (Nextflow, Snakemake).",
    solvedState:
      "Widespread adoption of AI-assisted reproducibility review; automated flagging of irreproducible findings; integrated reproducibility scores in publication and funding.",
    symmetries: ["Report structure equivalence","Analysis pipeline permutation"],
    benchmarks: ["Reproducibility rate in replications","Error detection accuracy","Code/data availability coverage"],
    papers: [
      { title: "Estimating the reproducibility of psychological science", authors: "Open Science Collaboration", year: 2015, link: "https://doi.org/10.1126/science.aac4716" },
      { title: "Statcheck: Extracting statistics from articles to detect reporting errors", authors: "Nuijten et al.", year: 2016, link: "https://doi.org/10.3758/s13428-016-0754-9" },
    ],
  },
  qml: {
    id: "qml",
    name: "Quantum ML (QML)",
    shortName: "Quantum ML",
    x: 0.76,
    y: 0.26,
    z: 0.72,
    category: "Quantum",
    whyItMatters:
      "Quantum speedups for ML tasks — kernel methods, sampling, optimization.",
    whyItsHard:
      "No convincing quantum advantage for practical ML problems has been demonstrated. Barren plateaus plague variational quantum circuits.",
    overlooked: "Crowded + Overhyped",
    startupAngle:
      "⚠️ Proceed with extreme caution. Hundreds of papers, near-zero practical results. Academic hype trap.",
    tags: ["quantum", "crowded"],
    definition:
      "Using quantum computers to accelerate or enhance machine learning tasks—quantum kernels, quantum sampling for generative models, quantum optimization for training. Aims for provable quantum advantage on ML problems.",
    bottleneck:
      "No demonstrated practical quantum advantage for ML; barren plateaus make training variational circuits intractable at scale; noise limits useful qubit counts; classical baselines are strong.",
    currentSota:
      "Quantum kernel methods; variational quantum classifiers; quantum generative models; quantum feature maps; limited demonstrations on small datasets.",
    solvedState:
      "Demonstrated, practical quantum speedup or quality improvement for ML tasks (classification, generative modeling, optimization) that cannot be matched classically.",
    symmetries: ["Unitary invariance","Quantum state symmetry"],
    benchmarks: ["Quantum vs classical kernel comparison","Variational quantum classifier accuracy","Quantum generative model quality"],
    papers: [
      { title: "Supervised learning with quantum-enhanced feature spaces", authors: "Havlicek et al.", year: 2019, link: "https://doi.org/10.1038/s41586-019-0980-2" },
      { title: "Barren plateaus in quantum neural network training landscapes", authors: "McClean et al.", year: 2018, link: "https://doi.org/10.1038/s41467-018-07090-4" },
    ],
  },
  vqas: {
    id: "vqas",
    name: "Variational Quantum Algorithms (VQAs)",
    shortName: "Variational Quantum",
    x: 0.72,
    y: 0.18,
    z: 0.65,
    category: "Quantum",
    whyItMatters:
      "Near-term quantum algorithms (VQE, QAOA) for chemistry and optimization on noisy hardware.",
    whyItsHard:
      "Barren plateaus make training intractable at scale. Noise destroys signal. Classical simulation of small instances is often faster.",
    overlooked: "Crowded + Stalled",
    startupAngle:
      "⚠️ Was the biggest bet in quantum computing 2018–2023. Now widely seen as a dead end for near-term advantage.",
    tags: ["quantum", "crowded"],
    definition:
      "Variational quantum algorithms (VQE, QAOA, etc.) that use parameterized quantum circuits optimized classically for chemistry, optimization, and simulation on near-term noisy quantum hardware.",
    bottleneck:
      "Barren plateaus make gradients vanish at scale; noise destroys coherent computation; classical simulation often faster for small instances; hardware connectivity and gate fidelity limits.",
    currentSota:
      "VQE for molecular ground states; QAOA for MaxCut, combinatorial optimization; error mitigation (zero-noise extrapolation, readout mitigation); chemistry-inspired ansatzes.",
    solvedState:
      "VQAs that achieve practical advantage over classical methods on real hardware—for chemistry, optimization, or simulation—with scalable training and error resilience.",
    symmetries: ["Hamiltonian symmetry (conservation laws)","Ansatz structure"],
    benchmarks: ["VQE energy accuracy vs classical","QAOA approximation ratio","Circuit depth and parameter count"],
    papers: [
      { title: "The theory of variational hybrid quantum-classical algorithms", authors: "McClean et al.", year: 2016, link: "https://arxiv.org/abs/1509.04279" },
      { title: "A variational eigenvalue solver on a photonic quantum processor", authors: "Peruzzo et al.", year: 2014, link: "https://doi.org/10.1038/ncomms5213" },
      { title: "Recent Developments in VQE: Survey and Benchmarking", authors: "Various", year: 2026, link: "https://arxiv.org/abs/2602.11384" },
    ],
  },
  llm_lit_mining: {
    id: "llm_lit_mining",
    name: "LLM-Based Literature Mining",
    shortName: "LLM Lit Mining",
    x: 0.84,
    y: 0.22,
    z: 0.15,
    category: "Meta-Science",
    whyItMatters:
      "Using GPT/Claude to extract facts from papers, summarize findings, build knowledge bases.",
    whyItsHard:
      "Useful but not differentiated — anyone with API access can do it. Hallucinations are dangerous in science. No real moat.",
    overlooked: "Very Crowded",
    startupAngle:
      "Quickly becomes a feature, not a product. Zero technical moat.",
    tags: ["infrastructure", "crowded"],
    definition:
      "Using LLMs to extract facts, relationships, and summaries from scientific literature—building knowledge bases, supporting systematic reviews, linking entities across papers.",
    bottleneck:
      "Hallucinations are dangerous in science; citation and provenance are critical; scale of literature; domain-specific terminology; evaluating extracted knowledge quality.",
    currentSota:
      "GPT-4/Claude for extraction; BioBERT, SciBERT for embeddings; automated systematic review tools; knowledge graph construction from abstracts/full text.",
    solvedState:
      "Reliable, provenance-tracked extraction of scientific facts from literature with quantified uncertainty, integrated into queryable knowledge bases and hypothesis generation.",
    symmetries: ["Paraphrase equivalence","Citation graph structure"],
    benchmarks: ["Fact extraction accuracy","Relation extraction F1","Systematic review recall/precision"],
    papers: [
      { title: "BioBERT: a pre-trained biomedical language representation model", authors: "Lee et al.", year: 2020, link: "https://doi.org/10.1093/bioinformatics/btaa682" },
      { title: "PubmedBERT: Domain-specific language model pretraining for biomedical NLP", authors: "Gu et al.", year: 2021, link: "https://arxiv.org/abs/2007.15779" },
    ],
  },
  chatbots_sci: {
    id: "chatbots_sci",
    name: "Chatbots for Science Education",
    shortName: "Chatbots Sci Ed",
    x: 0.90,
    y: 0.08,
    z: 0.08,
    category: "Meta-Science",
    whyItMatters:
      "LLM wrappers that answer science questions or tutor students.",
    whyItsHard:
      "Zero technical moat. Commodity LLM application. Every big lab offers this. Not a research problem.",
    overlooked: "Saturated",
    startupAngle:
      "Not a research problem. Commodity LLM application.",
    tags: ["crowded"],
    definition:
      "LLM-based chatbots and tutoring systems for science education—answering student questions, explaining concepts, guiding problem-solving, and adapting to learner level.",
    bottleneck:
      "Accuracy for technical content; pedagogical alignment; avoiding over-reliance and passive learning; handling misconceptions; assessment of learning outcomes.",
    currentSota:
      "GPT-4, Claude, Gemini for science Q&A; Khanmigo; domain-specific tutors (chemistry, physics); retrieval-augmented tutoring.",
    solvedState:
      "Personalized science tutors that reliably teach concepts, correct misconceptions, and measurably improve learning outcomes across age and subject.",
    symmetries: ["Pedagogical equivalence (different explanations)","Question paraphrasing"],
    benchmarks: ["Concept mastery assessment","Student satisfaction","Learning gain vs. human tutor"],
    papers: [
      { title: "Is ChatGPT a Good Teacher Coach? Measuring Zero-Shot Performance", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2402.03852" },
      { title: "Large language models for education: A survey", authors: "Various", year: 2024, link: "https://arxiv.org/abs/2308.09254" },
    ],
  },

  // ──────── CROSS-CUTTING ────────
  autonomous_wet_labs: {
    id: "autonomous_wet_labs",
    name: "Autonomous Wet Lab Agents",
    shortName: "Autonomous Wet Labs",
    x: 0.15,
    y: 0.88,
    z: 0.7,
    category: "Meta-Science",
    whyItMatters:
      "Close the loop: AI designs experiment → robot executes → AI analyzes → AI redesigns. Compresses years of R&D into weeks.",
    whyItsHard:
      "Robotics + ML + domain knowledge integration. Handling real-world noise, equipment failures. Requires foundation models that understand experimental protocols.",
    overlooked: "Yes",
    startupAngle:
      "Self-driving lab as a service. The AI orchestration layer is the gap. See FutureHouse, but the space is wide open.",
    tags: ["agents", "infrastructure"],
    definition:
      "Closed-loop systems where AI designs experiments, robots/lab equipment execute them, and AI analyzes results to redesign—'self-driving labs' for chemistry, materials, biology.",
    bottleneck:
      "Integration of reasoning, simulation, and physical execution; handling equipment failures and real-world noise; domain models for experimental outcomes; safety and validation.",
    currentSota:
      "A-Lab (autonomous materials synthesis); Coscientist + lab automation; FutureHouse; automated crystallization; closed-loop optimization for organic synthesis.",
    solvedState:
      "Labs that autonomously discover new materials, molecules, or conditions with minimal human intervention—compressing years of R&D into weeks.",
    symmetries: ["Protocol equivalence","Experimental design permutation"],
    benchmarks: ["Materials discovered autonomously","Synthesis success rate","Cycles to discovery"],
    papers: [
      { title: "An autonomous laboratory for the accelerated synthesis of inorganic materials", authors: "MacLeod et al.", year: 2023, link: "https://doi.org/10.1038/s41586-023-06734-w" },
      { title: "A self-driving laboratory advances autonomous discovery in catalysis", authors: "MacLeod et al.", year: 2020, link: "https://doi.org/10.1038/s42256-020-0166-x" },
    ],
  },
  active_learning: {
    id: "active_learning",
    name: "Active Learning / Design of Experiments",
    shortName: "Active Learning",
    x: 0.12,
    y: 0.45,
    z: 0.25,
    category: "Meta-Science",
    whyItMatters:
      "Experiments are expensive ($10K–$1M each). Intelligently choosing which experiment to run next can save months and millions.",
    whyItsHard:
      'Academically unglamorous. Bayesian optimization is "old." Not publishable in top ML venues.',
    overlooked: "Yes",
    startupAngle:
      "Experiment planning SaaS for biotech labs. Integrate with LIMS, suggest next experiments, learn from results.",
    tags: ["infrastructure", "agents"],
    definition:
      "Intelligently selecting the next experiments or data points to label/measure so as to maximize information gain or optimize a downstream objective—Bayesian optimal experimental design, active learning for ML.",
    bottleneck:
      "Acquisition functions scale poorly; high-dimensional design spaces; multi-objective and costly evaluations; integration with real experimental workflows.",
    currentSota:
      "Bayesian optimization (GP, neural); acquisition functions (EI, UCB, KG); Deep Adaptive Design for amortized BED; entropy search; batch and multi-fidelity methods.",
    solvedState:
      "Experiment planning systems that provably minimize experiments needed to achieve goals—drug discovery, materials screening, causal discovery—with integration into LIMS and automation.",
    symmetries: ["Design space equivalence","Information-theoretic invariance"],
    benchmarks: ["Number of experiments to target","Regret (optimization)","Model accuracy vs. data budget"],
    papers: [
      { title: "Deep Adaptive Design: Amortizing Sequential Bayesian Experimental Design", authors: "Foster et al.", year: 2021, link: "https://arxiv.org/abs/2103.02438" },
      { title: "Taking the human out of the loop: A review of Bayesian optimization", authors: "Shahriari et al.", year: 2016, link: "https://doi.org/10.1109/JPROC.2015.2494218" },
    ],
  },
  lab_automation: {
    id: "lab_automation",
    name: "AI for Lab Automation (Routine)",
    shortName: "Lab Automation",
    x: 0.10,
    y: 0.40,
    z: 0.22,
    category: "Meta-Science",
    whyItMatters:
      "Enormous installed base of lab instruments that are badly underutilized. Simple anomaly detection, schedule optimization, and predictive maintenance would save billions.",
    whyItsHard:
      "Not the sexy 'autonomous lab' — just making existing pipetting robots, plate readers, and HPLC systems smarter with basic ML.",
    overlooked: "Very",
    startupAngle:
      "Middleware layer for lab instruments. Low-hanging fruit with clear ROI.",
    tags: ["infrastructure"],
    definition:
      "Applying ML to routine lab operations—anomaly detection for instruments, predictive maintenance, scheduling optimization, quality control—improving throughput and reliability without full autonomy.",
    bottleneck:
      "Heterogeneous instruments and protocols; limited labeled failure data; integration with legacy LIMS; ROI justification for incremental improvements.",
    currentSota:
      "Anomaly detection for HPLC, plate readers; predictive maintenance; automated quality control; scheduling and resource optimization; basic computer vision for sample tracking.",
    solvedState:
      "Widespread deployment of ML that reliably improves lab throughput, reduces failures, and enables predictive maintenance—with clear ROI and minimal integration cost.",
    symmetries: ["Instrument equivalence","Schedule permutation"],
    benchmarks: ["Downtime reduction","Throughput improvement","Anomaly detection recall"],
    papers: [
      { title: "Machine learning for predictive maintenance in industrial systems", authors: "Various", year: 2021, link: "https://arxiv.org/abs/2101.03236" },
      { title: "Predictive maintenance using machine learning", authors: "Various", year: 2019, link: "https://arxiv.org/abs/1902.08153" },
    ],
  },
  microscopy: {
    id: "microscopy",
    name: "Microscopy Image Segmentation",
    shortName: "Microscopy Seg",
    x: 0.80,
    y: 0.20,
    z: 0.2,
    category: "Meta-Science",
    whyItMatters:
      "U-Net variants for cell/tissue segmentation. SAM and foundation models handle many cases out-of-the-box.",
    whyItsHard:
      "Largely a solved problem for standard cases. Remaining challenges are domain-specific edge cases.",
    overlooked: "Crowded",
    startupAngle:
      "Low barrier to entry, low defensibility. Standard cases are commoditized.",
    tags: ["infrastructure", "crowded"],
    definition:
      "Segmentation of cells, organelles, and tissue structures in microscopy images—instance and semantic segmentation for fluorescence, brightfield, and multi-modal microscopy.",
    bottleneck:
      "Domain shift across modalities and stains; rare or fine structures; 3D and time-lapse; limited annotations; generalization from standard datasets to novel conditions.",
    currentSota:
      "Cellpose (generalist, 70k+ objects); StarDist; U-Net variants; SAM for segmentation; Cellpose-SAM; foundation models (Segment Anything) for zero-shot.",
    solvedState:
      "Universal microscopy segmentation that generalizes across modalities, stains, and organisms with minimal or zero retraining—handling 2D, 3D, and time-lapse.",
    symmetries: ["Translation invariance","Rotation invariance (for isotropic resolution)","Scale invariance (multi-scale structures)"],
    benchmarks: ["Cell Segmentation Benchmark","NeurIPS Cell Segmentation Challenge","BBBC (Broad Bioimage Benchmark Collection)"],
    papers: [
      { title: "Cellpose: a generalist algorithm for cellular segmentation", authors: "Stringer et al.", year: 2020, link: "https://doi.org/10.1038/s41592-020-01018-x" },
      { title: "Segment Anything in microscopy", authors: "Various", year: 2023, link: "https://arxiv.org/abs/2304.04178" },
      { title: "StarDist: Object detection for biological images", authors: "Schmidt et al.", year: 2018, link: "https://arxiv.org/abs/1806.03535" },
    ],
  },
};
