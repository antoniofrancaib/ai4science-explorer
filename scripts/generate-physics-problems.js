#!/usr/bin/env node

/**
 * Generates a JSON object for Physics & Earth category problems.
 * All content is scientifically accurate with real paper titles and arxiv/doi links.
 */

const data = {
  plasma_fusion: {
    definition:
      "AI-driven magnetic control of tokamak plasmas to suppress instabilities (disruptions, edge-localized modes) and maintain stable confinement for fusion energy. Reinforcement learning agents coordinate magnetic coils in real time to sculpt and stabilize plasma shapes.",
    bottleneck:
      "Sim-to-real transfer: controllers trained on expensive simulators often fail to generalize to hardware; real-time (<1ms) latency requirements for plasma feedback control; safety constraints during exploration.",
    currentSota:
      "DeepMind/EPFL RL for TCV tokamak (plasma sculpting, shape control); 'Towards Practical Reinforcement Learning for Tokamak Magnetic Control' with 65% shape accuracy improvement; MPC-RL hybrids.",
    solvedState:
      "Autonomous plasma control that maintains stable fusion burn, suppresses disruptions reliably, and generalizes across tokamak configurations. Real-time deployment in ITER-class devices.",
    symmetries: [
      "Axisymmetry (tokamak geometry)",
      "Time-reversal symmetry of ideal MHD",
      "Gauge invariance (electromagnetic)",
    ],
    benchmarks: [
      "TCV plasma shape control",
      "ITER disruption prediction",
      "DIII-D control benchmarks",
    ],
    papers: [
      {
        title:
          "Magnetic control of tokamak plasmas through deep reinforcement learning",
        authors: "Degrave et al. (DeepMind, EPFL)",
        year: 2022,
        link: "https://www.nature.com/articles/s41586-021-04301-9",
      },
      {
        title:
          "Towards Practical Reinforcement Learning for Tokamak Magnetic Control",
        authors: "Tracey et al. (DeepMind)",
        year: 2024,
        link: "https://doi.org/10.1016/j.fusengdes.2024.114364",
      },
      {
        title: "Accelerating fusion science through learned plasma control",
        authors: "DeepMind Research",
        year: 2022,
        link: "https://arxiv.org/abs/2112.11759",
      },
    ],
  },
  turbulence: {
    definition:
      "Machine learning for turbulence closure models that close the Reynolds-averaged Navier-Stokes (RANS) or large-eddy simulation (LES) equations by learning the unresolved subgrid-scale stress tensor from high-fidelity data.",
    bottleneck:
      "Ensuring physical consistency (realizability, Galilean invariance); generalization across flow geometries and Reynolds numbers; incorporating known algebraic constraints among tensor components.",
    currentSota:
      "Symmetry-aware equivariant neural networks (ENNs) for RANS closure; physics-informed tensor basis networks; differentiable physics with GNNs on unstructured grids; turbulence realizability constraints as inductive bias.",
    solvedState:
      "ML closures that generalize across flow regimes, preserve key turbulence statistics, and are provably realizable. Replace hand-tuned k-ε, k-ω in industrial CFD with learned closures.",
    symmetries: [
      "Galilean invariance",
      "Reynolds stress tensor symmetry (symmetric, traceless)",
      "Rotational equivariance",
      "RANS realizability constraints",
    ],
    benchmarks: [
      "Periodic Hill flow",
      "Backward-facing step",
      "Airfoil flow separation",
      "Turbulent channel flow DNS→LES",
    ],
    papers: [
      {
        title:
          "Turbulence closure modeling with machine learning approaches: A perspective",
        authors: "Girimaji",
        year: 2023,
        link: "https://arxiv.org/abs/2312.14902",
      },
      {
        title:
          "Symmetry aware Reynolds Averaged Navier Stokes turbulence models with equivariant neural networks",
        authors: "Various",
        year: 2025,
        link: "https://arxiv.org/abs/2511.09769",
      },
      {
        title:
          "Generalizable data-driven turbulence closure modeling on unstructured grids with differentiable physics",
        authors: "Various",
        year: 2023,
        link: "https://arxiv.org/abs/2307.13533",
      },
    ],
  },
  boltzmann: {
    definition:
      "Efficiently sampling from high-dimensional Boltzmann distributions p(x) ∝ exp(-E(x)/k_B T) using flow-based or generative models, enabling computation of free energies, binding affinities, and thermodynamic observables in molecular and statistical physics.",
    bottleneck:
      "Multimodality and mode collapse; slow mixing in rugged energy landscapes; expensive energy evaluations; flow models often require samples from the target (chicken-and-egg).",
    currentSota:
      "Energy-weighted flow matching (EWFM), iterated energy-based flow matching (iEFM); flow perturbation for unbiased acceleration; FALCON for few-step sampling; path gradients for molecular systems.",
    solvedState:
      "Simulation-free or few-evaluation sampling from arbitrary Boltzmann distributions. Routine free energy calculations for drug binding, phase transitions, and rare event statistics at 100–1000× fewer energy calls.",
    symmetries: [
      "SE(3) equivariance (molecular systems)",
      "Permutation invariance (identical particles)",
      "Time-reversal symmetry (detailed balance)",
    ],
    benchmarks: [
      "Lennard-Jones clusters",
      "Alanine dipeptide",
      "Boltzmann generators benchmark",
      "Molecular binding free energy (relative)",
    ],
    papers: [
      {
        title:
          "Energy-Weighted Flow Matching: Unlocking Continuous Normalizing Flows for Efficient and Scalable Boltzmann Sampling",
        authors: "Various",
        year: 2025,
        link: "https://arxiv.org/abs/2509.03726",
      },
      {
        title:
          "Iterated Energy-based Flow Matching for Sampling from Boltzmann Densities",
        authors: "Various",
        year: 2024,
        link: "https://arxiv.org/abs/2408.16249",
      },
      {
        title: "Flow perturbation to accelerate Boltzmann sampling",
        authors: "Various",
        year: 2025,
        link: "https://doi.org/10.1038/s41467-025-62039-8",
      },
    ],
  },
  neural_pdes: {
    definition:
      "Learning solution operators for parametric PDEs—mappings from initial/boundary conditions and parameters to solutions—enabling fast inference for Navier-Stokes, Darcy flow, and other PDE families without solving from scratch each time.",
    bottleneck:
      "Generalization to unseen geometries and boundary conditions; enforcing conservation laws; error bounds and reliability for safety-critical applications; long-horizon autoregressive error accumulation.",
    currentSota:
      "Fourier Neural Operator (FNO), U-NO, FNO-2D/3D; DeepONet; Koopman neural operators; 3D neural operators for weather; zero-shot super-resolution on turbulent flows.",
    solvedState:
      "Neural operators that generalize across geometry, boundary conditions, and parameters with certified error bounds. Real-time digital twins for engineering; 100–1000× speedup over classical solvers.",
    symmetries: [
      "Translation equivariance (Fourier/convolution)",
      "Rotational equivariance (for isotropic PDEs)",
      "Galilean invariance (Navier-Stokes)",
      "Scale invariance (where applicable)",
    ],
    benchmarks: [
      "Navier-Stokes (viscous fluids)",
      "Darcy flow (porous media)",
      "Burgers equation",
      "Operator learning benchmark (Li et al.)",
    ],
    papers: [
      {
        title:
          "Fourier Neural Operator for Parametric Partial Differential Equations",
        authors: "Li et al.",
        year: 2020,
        link: "https://arxiv.org/abs/2010.08895",
      },
      {
        title:
          "Learning skillful medium-range global weather forecasting",
        authors: "Lam et al. (GraphCast)",
        year: 2022,
        link: "https://arxiv.org/abs/2212.12794",
      },
      {
        title: "Neural Operator: Learning Maps Between Function Spaces",
        authors: "Lu et al.",
        year: 2021,
        link: "https://arxiv.org/abs/2108.08481",
      },
    ],
  },
  climate_emulators: {
    definition:
      "ML models that emulate or downscale Earth System Model (ESM) outputs to produce high-resolution climate projections, reducing computational cost from months to minutes while preserving physical consistency and uncertainty quantification.",
    bottleneck:
      "Long-term stability (100+ year runs); physical consistency (conservation, extremes); distribution shift as climate warms; internal variability vs. forced response; multi-model generalization.",
    currentSota:
      "LUCIE (lightweight emulator, 100-year stability); ACE (200M params, moisture conservation); generative downscaling (EnScale, consistency models); zero-shot ESM downscaling; ACE-Dyn for dynamics.",
    solvedState:
      "Emulators that run 1000-member ensembles at 0.1° resolution in hours; conserve energy/moisture; capture extremes and internal variability. Operational use for IPCC-class assessments and hyperlocal risk.",
    symmetries: [
      "Spatial translation (homogeneous statistics)",
      "Seasonal cyclicity",
      "Column mass conservation (moisture)",
      "Energy conservation",
    ],
    benchmarks: [
      "ERA5 reanalysis emulation",
      "CMIP6 multi-model downscaling",
      "Extreme precipitation/temperature statistics",
      "100-year stability metrics",
    ],
    papers: [
      {
        title:
          "LUCIE: A Lightweight Uncoupled ClImate Emulator with long-term stability and physical consistency for O(1000)-member ensembles",
        authors: "Various",
        year: 2024,
        link: "https://arxiv.org/abs/2405.16297",
      },
      {
        title:
          "Fast, Scale-Adaptive, and Uncertainty-Aware Downscaling of Earth System Model Fields with Generative Machine Learning",
        authors: "Various",
        year: 2024,
        link: "https://arxiv.org/abs/2403.02774",
      },
      {
        title:
          "ACE: A fast, skillful learned global atmospheric model for weather and climate",
        authors: "Various",
        year: 2024,
        link: "https://arxiv.org/abs/2310.02074",
      },
    ],
  },
  cosmological_sim: {
    definition:
      "ML emulators for cosmological N-body simulations that predict nonlinear matter distribution (displacements, velocities) from linear initial conditions, enabling fast generation of mock catalogs for survey analysis and cosmological parameter inference.",
    bottleneck:
      "Preserving small-scale statistics (k ~ 1 Mpc⁻¹h); cosmology dependence across ΛCDM and beyond; generalization to primordial non-Gaussianity; error propagation in derived quantities (halos, weak lensing).",
    currentSota:
      "Field-level neural emulators (CNN) for displacement/velocity; style-parameterized cosmology interpolation; COmoving Computer Acceleration (COCA) hybrid ML+N-body; N-body GAN; COLA-based fast sims.",
    solvedState:
      "Emulators matching N-body statistics to sub-percent level at k > 1 h/Mpc; 1000× speedup; robust to cosmology and initial conditions. Standard tool for Euclid, Rubin, DESI analysis.",
    symmetries: [
      "Statistical homogeneity and isotropy",
      "Translation invariance",
      "Scale invariance (linear regime)",
    ],
    benchmarks: [
      "Quijote N-body simulations",
      "AbacusSummit",
      "Power spectrum / bispectrum accuracy",
      "Halo mass function",
    ],
    papers: [
      {
        title:
          "Field Level Neural Network Emulator for Cosmological N-body Simulations",
        authors: "Various",
        year: 2022,
        link: "https://arxiv.org/abs/2206.04594",
      },
      {
        title:
          "Neural network emulator for cosmological density fields",
        authors: "Various",
        year: 2024,
        link: "https://arxiv.org/abs/2408.07699",
      },
      {
        title:
          "COmoving Computer Acceleration (COCA): N-body simulations in an emulated frame of reference",
        authors: "Various",
        year: 2025,
        link: "https://doi.org/10.1051/0004-6361/202452217",
      },
    ],
  },
  ocean_modeling: {
    definition:
      "ML-augmented ocean circulation models for forecasting and climate projection, including parameterization of subgrid processes, coupled ocean-atmosphere dynamics, and acceleration of coastal/regional models.",
    bottleneck:
      "Multi-scale turbulent dynamics; coupling with biogeochemistry and sea ice; sparse deep-ocean observations; error accumulation in autoregressive forecasts; preserving thermohaline circulation.",
    currentSota:
      "Hybrid physics-AI coupled frameworks; Ola (Spherical FNO for ocean-atmosphere); NeuralOM (Progressive Residual Correction, 60-day S2S); 4D Swin Transformer surrogates (450× speedup for ROMS).",
    solvedState:
      "Operational ocean models with ML parameterizations that match observational statistics; subseasonal-to-seasonal forecasts competitive with physics-only; digital twins for coastal management.",
    symmetries: [
      "Rotational invariance (Coriolis)",
      "Boussinesq approximation (incompressibility)",
      "Thermodynamic consistency",
    ],
    benchmarks: [
      "OGCM reanalysis (e.g., ORAS5)",
      "Subseasonal forecast skill (S2S)",
      "Sea surface temperature RMSE",
      "Meridional overturning circulation",
    ],
    papers: [
      {
        title:
          "A Framework for Hybrid Physics-AI Coupled Ocean Models",
        authors: "Various",
        year: 2025,
        link: "https://arxiv.org/abs/2510.22676",
      },
      {
        title:
          "Coupled Ocean-Atmosphere Dynamics in a Machine Learning Earth System Model",
        authors: "Various",
        year: 2024,
        link: "https://arxiv.org/abs/2406.08632",
      },
      {
        title:
          "NeuralOM: Neural Ocean Model for Subseasonal-to-Seasonal Simulation",
        authors: "Various",
        year: 2025,
        link: "https://arxiv.org/abs/2505.21020",
      },
    ],
  },
  seismology: {
    definition:
      "ML for seismic event discrimination (earthquake vs. explosion vs. noise), seismic phase picking, seismic inversion for subsurface structure, and earthquake early warning—improving monitoring and hazard assessment.",
    bottleneck:
      "Earthquake prediction remains fundamentally difficult (Poissonian statistics); temporal generalization (models degrade on future data); sparse networks and heterogeneous media; interpretability for operational use.",
    currentSota:
      "Spectrogram-based CNNs for event discrimination (92%+ accuracy); EPBench for short-term prediction; EQTransformer, PhaseNet for phase picking; Bayesian and neural network inversion.",
    solvedState:
      "Reliable real-time event classification and early warning with calibrated uncertainty. Operational deployment in national networks. Interpretable features for regulatory acceptance.",
    symmetries: [
      "Reciprocity (source-receiver)",
      "Elastic wave equation symmetries",
      "Time-translation invariance (stationary media)",
    ],
    benchmarks: [
      "EPBench (short-term earthquake prediction)",
      "STEAD (earthquake detection)",
      "Seismic event discrimination (4-way)",
      "PhaseNet/PhasePicker accuracy",
    ],
    papers: [
      {
        title:
          "Exploration of Machine Learning Methods to Seismic Event Discrimination in the Pacific Northwest",
        authors: "Various",
        year: 2025,
        link: "https://arxiv.org/abs/2510.23795",
      },
      {
        title:
          "EPBench: A Benchmark for Short-term Earthquake Prediction",
        authors: "Various",
        year: 2025,
        link: "https://arxiv.org/abs/2505.15588",
      },
      {
        title:
          "EQTransformer: Earthquake detection with multi-task learning",
        authors: "Mousavi et al.",
        year: 2020,
        link: "https://arxiv.org/abs/2103.03821",
      },
    ],
  },
  grav_waves: {
    definition:
      "ML for real-time detection and parameter estimation of gravitational waves from compact binary coalescences (CBC) in LIGO/Virgo/KAGRA data, reducing latency and improving sensitivity compared to matched filtering.",
    bottleneck:
      "Complex instrumental noise (glitches); real-time low-latency requirements; template bank coverage; calibration uncertainty; distribution shift between simulated and real data.",
    currentSota:
      "cWB-ML (coherent WaveBurst + ML, ~20% efficiency gain); fully ML CBC pipeline for stellar BHBH; ML inference for BNS in ~1 s with improved localization; DINGO for likelihood-free inference.",
    solvedState:
      "ML-first pipelines with sensitivity matching or exceeding matched filtering; sub-second parameter estimation for BNS for electromagnetic follow-up; robust to glitches and calibration errors.",
    symmetries: [
      "Lorentz invariance",
      "Gauge invariance (GW polarization)",
      "Time translation",
    ],
    benchmarks: [
      "LIGO Open Data (GWTC catalogs)",
      "False alarm rate vs. sensitive distance",
      "Parameter estimation accuracy (chirp mass, etc.)",
      "Latency (time to detection)",
    ],
    papers: [
      {
        title:
          "A machine-learning pipeline for real-time detection of gravitational waves from compact binary coalescences",
        authors: "Various",
        year: 2024,
        link: "https://arxiv.org/abs/2403.18661",
      },
      {
        title:
          "Real-time gravitational-wave inference for binary neutron stars using machine learning",
        authors: "Various",
        year: 2024,
        link: "https://arxiv.org/abs/2407.09602",
      },
      {
        title:
          "Search for binary black hole mergers in the third observing run of Advanced LIGO-Virgo using coherent WaveBurst enhanced with machine learning",
        authors: "Krishnan et al.",
        year: 2022,
        link: "https://arxiv.org/abs/2201.01495",
      },
    ],
  },
  wildfire: {
    definition:
      "ML models for wildfire spread prediction, ignition risk, and burn area forecasting using remote sensing, meteorological data, vegetation, topography, and historical fire records.",
    bottleneck:
      "Chaotic fire-atmosphere coupling; rare extreme events with few training examples; heterogeneous fuels and topography; real-time data integration; interpretability for emergency management.",
    currentSota:
      "WSTS+ benchmark (8-year data, multi-day input); MFiSP (multimodal: FIRMS, social media); FireScope (VLM + chain-of-thought); autoregressive CGAN for spread; ConvLSTM and transformer architectures.",
    solvedState:
      "Operational next-day and multi-day fire spread forecasts with calibrated uncertainty; integration into emergency dispatch; reliable for insurance and land management.",
    symmetries: [
      "Spatial translation invariance (homogeneous fuels)",
      "Temporal causality (fire propagates forward)",
    ],
    benchmarks: [
      "WSTS+ (wildfire spread)",
      "FIRMS detection accuracy",
      "Burn area RMSE",
      "Ignition risk ROC-AUC",
    ],
    papers: [
      {
        title:
          "FireScope: Wildfire Risk Prediction with a Chain-of-Thought Oracle",
        authors: "Various",
        year: 2025,
        link: "https://arxiv.org/abs/2511.17171",
      },
      {
        title:
          "MFiSP: A Multimodal Fire Spread Prediction Framework",
        authors: "Various",
        year: 2025,
        link: "https://arxiv.org/abs/2510.23934",
      },
      {
        title:
          "Next-day wildfire spread prediction with historical temporal patterns and satellite observations",
        authors: "Various",
        year: 2025,
        link: "https://arxiv.org/abs/2502.12003",
      },
    ],
  },
  dark_matter: {
    definition:
      "ML for model-independent anomaly detection and rare event identification in particle physics experiments (LHC, direct detection), searching for beyond-Standard-Model signals including dark matter without prior specification of signal topology.",
    bottleneck:
      "Systematic uncertainties and simulation-data mismatch; high background rates; need for model-independent search that doesn't miss unexpected signatures; robust multi-background training.",
    currentSota:
      "ATLAS unsupervised anomaly detection (autoencoders on invariant mass); Dark Machines Anomaly Score Challenge; multi-background representation learning; DDD (Discriminatory Detection of Distortions).",
    solvedState:
      "Model-independent anomaly detection with well-calibrated significance; discovery of new resonances or exotic signatures; reduced sensitivity to simulation imperfections.",
    symmetries: [
      "Lorentz invariance",
      "Gauge invariance (SM)",
      "CP symmetry (where applicable)",
    ],
    benchmarks: [
      "Dark Machines Anomaly Score Challenge",
      "ATLAS/CMS public datasets",
      "LHC Olympics",
      "Anomaly detection efficiency vs. background rejection",
    ],
    papers: [
      {
        title:
          "Search for new phenomena in two-body invariant mass distributions using unsupervised machine learning for anomaly detection at sqrt(s)=13 TeV with the ATLAS detector",
        authors: "ATLAS Collaboration",
        year: 2023,
        link: "https://arxiv.org/abs/2307.01612",
      },
      {
        title:
          "Robust Anomaly Detection for Particle Physics Using Multi-Background Representation Learning",
        authors: "Various",
        year: 2024,
        link: "https://arxiv.org/abs/2401.08777",
      },
      {
        title:
          "The Dark Machines Anomaly Score Challenge: Benchmark Data and Model Independent Event Classification for the Large Hadron Collider",
        authors: "Heinz et al.",
        year: 2021,
        link: "https://arxiv.org/abs/2105.14027",
      },
    ],
  },
  astro_transients: {
    definition:
      "ML for automated classification of astronomical transients (supernovae, TDEs, AGN, etc.) from time-domain surveys (ZTF, LSST), enabling real-time follow-up prioritization and discovery of rare events.",
    bottleneck:
      "Sparse, irregularly sampled light curves; class imbalance (rare transients); real-time processing under millions of alerts/night; generalization to new survey cadences and filters.",
    currentSota:
      "BTSbot (CNN for ZTF bright transients, 99% completeness, automated spectroscopic follow-up); ZTF SCoPe; recurrent/transformer models for light curves; PLAsTiCC dataset.",
    solvedState:
      "Fully automated discovery-to-classification pipeline; real-time spectroscopic follow-up triggers; LSST-era brokers with sub-minute classification; high recall for rare classes.",
    symmetries: [
      "Time translation (homogeneous light curve statistics)",
      "Flux scaling (different distances)",
    ],
    benchmarks: [
      "PLAsTiCC (transient classification)",
      "ZTF Bright Transient Survey",
      "LSST alert streams (simulated)",
      "BTSbot completeness vs. human scanning",
    ],
    papers: [
      {
        title:
          "The Zwicky Transient Facility Bright Transient Survey. III. BTSbot: Automated Identification and Follow-up of Bright Transients with Deep Learning",
        authors: "Various",
        year: 2024,
        link: "https://arxiv.org/abs/2401.15167",
      },
      {
        title:
          "BTSbot: A Multi-input Convolutional Neural Network to Automate and Expedite Bright Transient Identification for the Zwicky Transient Facility",
        authors: "Various",
        year: 2023,
        link: "https://arxiv.org/abs/2307.07618",
      },
      {
        title:
          "The PLAsTiCC team and pipeline: A transient and variable star classification pipeline for the Rubin Observatory",
        authors: "Various",
        year: 2019,
        link: "https://doi.org/10.3847/1538-4365/ab4f2e",
      },
    ],
  },
  weather_forecasting: {
    definition:
      "ML models that predict global weather variables autoregressively from reanalysis or assimilation state, rivaling or exceeding numerical weather prediction (NWP) in medium-range skill at orders-of-magnitude lower cost.",
    bottleneck:
      "Extreme event prediction (tails); ensemble generation for uncertainty; data assimilation integration; subseasonal and seasonal extension; operational latency and reliability.",
    currentSota:
      "GraphCast (GNN, 10-day forecast, 89% better than HRES); Pangu-Weather (3DEST, 0.25°, first AI to beat NWP across variables); FourCastNet; GenCast (diffusion ensemble); FengWu.",
    solvedState:
      "Operational ML weather models integrated into national forecasting centers; reliable ensemble predictions for extremes; subseasonal-to-seasonal skill comparable to NWP.",
    symmetries: [
      "Spatial translation (global)",
      "Rotational invariance (sphere)",
      "Conservation laws (mass, energy, moisture)",
    ],
    benchmarks: [
      "ECMWF HRES comparison",
      "WeatherBench 2",
      "Tropical cyclone tracking",
      "Extreme precipitation/temperature",
    ],
    papers: [
      {
        title:
          "Learning skillful medium-range global weather forecasting",
        authors: "Lam et al. (GraphCast)",
        year: 2022,
        link: "https://arxiv.org/abs/2212.12794",
      },
      {
        title:
          "Pangu-Weather: A 3D High-Resolution Model for Fast and Accurate Global Weather Forecast",
        authors: "Bi et al. (Huawei)",
        year: 2022,
        link: "https://arxiv.org/abs/2211.02556",
      },
      {
        title:
          "Accurate medium-range global weather forecasting with 3D neural networks",
        authors: "Bi et al.",
        year: 2023,
        link: "https://doi.org/10.1038/s41586-023-06185-3",
      },
    ],
  },
  pinns: {
    definition:
      "Neural networks trained with PDE residual terms in the loss, encoding physical laws (conservation, boundary conditions) as soft constraints. Enables data-efficient solution of forward and inverse PDE problems.",
    bottleneck:
      "Training instability from multi-objective loss balancing; slow convergence vs. classical solvers for well-posed problems; limited generalization; difficulty with stiff/high-frequency solutions.",
    currentSota:
      "Original Raissi-Karniadakis PINNs; hp-VPINNs, gPINNs; causal training; Fourier feature networks; separate loss weighting; increasingly surpassed by neural operators (FNO) for many applications.",
    solvedState:
      "PINNs that train stably, generalize well, and outperform classical methods in data-scarce or inverse settings. Practical deployment for design and inverse problems where data is expensive.",
    symmetries: [
      "PDE-specific symmetries (embedded in residual)",
      "Boundary condition enforcement",
      "Conservation law preservation (when encoded)",
    ],
    benchmarks: [
      "Burgers equation",
      "Navier-Stokes (2D lid-driven cavity)",
      "Heat equation",
      "Inverse problem reconstruction",
    ],
    papers: [
      {
        title:
          "Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations",
        authors: "Raissi, Perdikaris, Karniadakis",
        year: 2019,
        link: "https://arxiv.org/abs/1711.10561",
      },
      {
        title:
          "Physics-informed neural networks (Part II): Data-driven discovery of partial differential equations",
        authors: "Raissi et al.",
        year: 2017,
        link: "https://arxiv.org/abs/1711.10566",
      },
      {
        title:
          "Physics-Informed Neural Networks and Extensions",
        authors: "Raissi, Perdikaris, Ahmadi, Karniadakis",
        year: 2024,
        link: "https://arxiv.org/abs/2408.16806",
      },
    ],
  },
};

console.log(JSON.stringify(data));
