﻿function fetchAndInstantiateWasm (url, imports) {
    return fetch(url) // url could be your .wasm file
    .then(res => {
		if (res.ok)
			return res.arrayBuffer();
		throw new Error(`Unable to fetch Web Assembly file ${url}.`);
		})
    .then(bytes => WebAssembly.compile(bytes))
    .then(module => WebAssembly.instantiate(module, imports || {}))
    .then(instance => instance.exports);
}