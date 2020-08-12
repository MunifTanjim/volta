(function() {var implementors = {};
implementors["archive"] = [{"text":"impl Unpin for Tarball","synthetic":true,"types":[]},{"text":"impl Unpin for Zip","synthetic":true,"types":[]},{"text":"impl Unpin for ArchiveError","synthetic":true,"types":[]},{"text":"impl Unpin for Origin","synthetic":true,"types":[]}];
implementors["progress_read"] = [{"text":"impl&lt;R, T, F&gt; Unpin for ProgressRead&lt;R, T, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["test_support"] = [{"text":"impl Unpin for Execs","synthetic":true,"types":[]},{"text":"impl&lt;I1, I2&gt; Unpin for ZipAll&lt;I1, I2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I1: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;I2: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for MatchKind","synthetic":true,"types":[]},{"text":"impl Unpin for Remove","synthetic":true,"types":[]},{"text":"impl Unpin for ProcessBuilder","synthetic":true,"types":[]},{"text":"impl Unpin for ProcessError","synthetic":true,"types":[]}];
implementors["validate_npm_package_name"] = [{"text":"impl Unpin for SCOPED_PACKAGE","synthetic":true,"types":[]},{"text":"impl Unpin for SPECIAL_CHARS","synthetic":true,"types":[]},{"text":"impl Unpin for BLACKLIST","synthetic":true,"types":[]},{"text":"impl Unpin for BUILTINS","synthetic":true,"types":[]},{"text":"impl Unpin for Validity","synthetic":true,"types":[]}];
implementors["volta"] = [{"text":"impl Unpin for Completions","synthetic":true,"types":[]},{"text":"impl Unpin for Fetch","synthetic":true,"types":[]},{"text":"impl Unpin for Install","synthetic":true,"types":[]},{"text":"impl Unpin for PackageDetails","synthetic":true,"types":[]},{"text":"impl Unpin for Node","synthetic":true,"types":[]},{"text":"impl Unpin for PackageManager","synthetic":true,"types":[]},{"text":"impl Unpin for List","synthetic":true,"types":[]},{"text":"impl Unpin for Format","synthetic":true,"types":[]},{"text":"impl Unpin for Source","synthetic":true,"types":[]},{"text":"impl Unpin for Package","synthetic":true,"types":[]},{"text":"impl Unpin for PackageManagerKind","synthetic":true,"types":[]},{"text":"impl Unpin for Filter","synthetic":true,"types":[]},{"text":"impl Unpin for Subcommand","synthetic":true,"types":[]},{"text":"impl Unpin for WRAPPER","synthetic":true,"types":[]},{"text":"impl Unpin for Toolchain","synthetic":true,"types":[]},{"text":"impl Unpin for Lookup","synthetic":true,"types":[]},{"text":"impl Unpin for Pin","synthetic":true,"types":[]},{"text":"impl Unpin for Run","synthetic":true,"types":[]},{"text":"impl Unpin for Setup","synthetic":true,"types":[]},{"text":"impl Unpin for Uninstall","synthetic":true,"types":[]},{"text":"impl Unpin for Use","synthetic":true,"types":[]},{"text":"impl Unpin for Which","synthetic":true,"types":[]},{"text":"impl Unpin for Volta","synthetic":true,"types":[]},{"text":"impl Unpin for Subcommand","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]}];
implementors["volta_core"] = [{"text":"impl Unpin for VoltaError","synthetic":true,"types":[]},{"text":"impl Unpin for Inner","synthetic":true,"types":[]},{"text":"impl Unpin for ErrorKind","synthetic":true,"types":[]},{"text":"impl Unpin for ExitCode","synthetic":true,"types":[]},{"text":"impl Unpin for Event","synthetic":true,"types":[]},{"text":"impl Unpin for ErrorEnv","synthetic":true,"types":[]},{"text":"impl Unpin for EventLog","synthetic":true,"types":[]},{"text":"impl Unpin for EventKind","synthetic":true,"types":[]},{"text":"impl Unpin for LazyHookConfig","synthetic":true,"types":[]},{"text":"impl Unpin for HookConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for ToolHooks&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for EventHooks","synthetic":true,"types":[]},{"text":"impl Unpin for Publish","synthetic":true,"types":[]},{"text":"impl Unpin for RawResolveHook","synthetic":true,"types":[]},{"text":"impl Unpin for RawPublishHook","synthetic":true,"types":[]},{"text":"impl Unpin for RawHookConfig","synthetic":true,"types":[]},{"text":"impl Unpin for RawEventHooks","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for RawToolHooks&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for REL_PATH","synthetic":true,"types":[]},{"text":"impl Unpin for REL_PATH_PARENT","synthetic":true,"types":[]},{"text":"impl Unpin for DistroHook","synthetic":true,"types":[]},{"text":"impl Unpin for MetadataHook","synthetic":true,"types":[]},{"text":"impl Unpin for VOLTA_HOME","synthetic":true,"types":[]},{"text":"impl Unpin for VOLTA_INSTALL","synthetic":true,"types":[]},{"text":"impl Unpin for Logger","synthetic":true,"types":[]},{"text":"impl Unpin for LogContext","synthetic":true,"types":[]},{"text":"impl Unpin for LogVerbosity","synthetic":true,"types":[]},{"text":"impl Unpin for BinManifest","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Unpin for BinMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for RawBinManifest","synthetic":true,"types":[]},{"text":"impl Unpin for Engines","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Unpin for BinVisitor&lt;K, V&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for Monitor","synthetic":true,"types":[]},{"text":"impl Unpin for Image","synthetic":true,"types":[]},{"text":"impl Unpin for System","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Sourced&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for PlatformSpec","synthetic":true,"types":[]},{"text":"impl Unpin for CliPlatform","synthetic":true,"types":[]},{"text":"impl Unpin for Platform","synthetic":true,"types":[]},{"text":"impl Unpin for Source","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for InheritOption&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for LazyProject","synthetic":true,"types":[]},{"text":"impl Unpin for Project","synthetic":true,"types":[]},{"text":"impl Unpin for PartialPlatform","synthetic":true,"types":[]},{"text":"impl Unpin for Manifest","synthetic":true,"types":[]},{"text":"impl Unpin for RawManifest","synthetic":true,"types":[]},{"text":"impl Unpin for ToolchainSpec","synthetic":true,"types":[]},{"text":"impl Unpin for ManifestKey","synthetic":true,"types":[]},{"text":"impl Unpin for ToolCommand","synthetic":true,"types":[]},{"text":"impl Unpin for CommandArg","synthetic":true,"types":[]},{"text":"impl Unpin for DefaultBinary","synthetic":true,"types":[]},{"text":"impl Unpin for Session","synthetic":true,"types":[]},{"text":"impl Unpin for ActivityKind","synthetic":true,"types":[]},{"text":"impl Unpin for ShimResult","synthetic":true,"types":[]},{"text":"impl Unpin for VoltaLock","synthetic":true,"types":[]},{"text":"impl Unpin for BinConfig","synthetic":true,"types":[]},{"text":"impl Unpin for BinLoader","synthetic":true,"types":[]},{"text":"impl Unpin for PackageConfig","synthetic":true,"types":[]},{"text":"impl Unpin for PackageDetails","synthetic":true,"types":[]},{"text":"impl Unpin for Spec","synthetic":true,"types":[]},{"text":"impl Unpin for FetchStatus","synthetic":true,"types":[]},{"text":"impl Unpin for NodeVersion","synthetic":true,"types":[]},{"text":"impl Unpin for Node","synthetic":true,"types":[]},{"text":"impl Unpin for Manifest","synthetic":true,"types":[]},{"text":"impl Unpin for NodeIndex","synthetic":true,"types":[]},{"text":"impl Unpin for NodeEntry","synthetic":true,"types":[]},{"text":"impl Unpin for NodeDistroFiles","synthetic":true,"types":[]},{"text":"impl Unpin for RawNodeIndex","synthetic":true,"types":[]},{"text":"impl Unpin for RawNodeEntry","synthetic":true,"types":[]},{"text":"impl Unpin for Npm","synthetic":true,"types":[]},{"text":"impl Unpin for BundledNpm","synthetic":true,"types":[]},{"text":"impl Unpin for Package","synthetic":true,"types":[]},{"text":"impl Unpin for SHEBANG","synthetic":true,"types":[]},{"text":"impl Unpin for NpmViewData","synthetic":true,"types":[]},{"text":"impl Unpin for RawPackageConfig","synthetic":true,"types":[]},{"text":"impl Unpin for RawBinConfig","synthetic":true,"types":[]},{"text":"impl Unpin for RawBinLoader","synthetic":true,"types":[]},{"text":"impl Unpin for PackageIndex","synthetic":true,"types":[]},{"text":"impl Unpin for RawPackageMetadata","synthetic":true,"types":[]},{"text":"impl Unpin for RawPackageVersionInfo","synthetic":true,"types":[]},{"text":"impl Unpin for RawDistInfo","synthetic":true,"types":[]},{"text":"impl Unpin for TOOL_SPEC_PATTERN","synthetic":true,"types":[]},{"text":"impl Unpin for HAS_VERSION","synthetic":true,"types":[]},{"text":"impl Unpin for Yarn","synthetic":true,"types":[]},{"text":"impl Unpin for YarnIndex","synthetic":true,"types":[]},{"text":"impl Unpin for RawYarnIndex","synthetic":true,"types":[]},{"text":"impl Unpin for RawYarnEntry","synthetic":true,"types":[]},{"text":"impl Unpin for RawYarnAsset","synthetic":true,"types":[]},{"text":"impl Unpin for LazyToolchain","synthetic":true,"types":[]},{"text":"impl Unpin for Toolchain","synthetic":true,"types":[]},{"text":"impl Unpin for NodeVersion","synthetic":true,"types":[]},{"text":"impl Unpin for Platform","synthetic":true,"types":[]},{"text":"impl Unpin for VersionSpec","synthetic":true,"types":[]},{"text":"impl Unpin for VersionTag","synthetic":true,"types":[]},{"text":"impl Unpin for VersionVisitor","synthetic":true,"types":[]},{"text":"impl Unpin for Wrapper","synthetic":true,"types":[]}];
implementors["volta_layout"] = [{"text":"impl Unpin for VoltaInstall","synthetic":true,"types":[]},{"text":"impl Unpin for VoltaHome","synthetic":true,"types":[]},{"text":"impl Unpin for VoltaInstall","synthetic":true,"types":[]},{"text":"impl Unpin for VoltaHome","synthetic":true,"types":[]},{"text":"impl Unpin for VoltaHome","synthetic":true,"types":[]}];
implementors["volta_layout_macro"] = [{"text":"impl Unpin for Ast","synthetic":true,"types":[]},{"text":"impl Unpin for LayoutStruct","synthetic":true,"types":[]},{"text":"impl Unpin for Directory","synthetic":true,"types":[]},{"text":"impl Unpin for FieldPrefix","synthetic":true,"types":[]},{"text":"impl Unpin for EntryKind","synthetic":true,"types":[]},{"text":"impl Unpin for FieldContents","synthetic":true,"types":[]},{"text":"impl Unpin for Ir","synthetic":true,"types":[]},{"text":"impl Unpin for Entry","synthetic":true,"types":[]}];
implementors["volta_migrate"] = [{"text":"impl Unpin for MigrationState","synthetic":true,"types":[]},{"text":"impl Unpin for Empty","synthetic":true,"types":[]},{"text":"impl Unpin for V0","synthetic":true,"types":[]},{"text":"impl Unpin for V1","synthetic":true,"types":[]},{"text":"impl Unpin for V2","synthetic":true,"types":[]}];
implementors["volta_shim"] = [{"text":"impl Unpin for Error","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()