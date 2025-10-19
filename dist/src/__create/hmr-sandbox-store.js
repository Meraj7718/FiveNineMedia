import { create } from 'zustand';
export const useSandboxStore = create((set, get) => ({
    status: 'idle',
    isGenerating: false,
    hasError: false,
    setStatus: (status) => set({
        status,
        isGenerating: status === 'codegen-started' || status === 'codegen-generating',
        hasError: status === 'codegen-error',
    }),
    startCodeGen: () => get().setStatus('codegen-started'),
    setCodeGenGenerating: () => get().setStatus('codegen-generating'),
    completeCodeGen: () => get().setStatus('codegen-complete'),
    errorCodeGen: () => get().setStatus('codegen-error'),
    stopCodeGen: () => get().setStatus('codegen-stopped'),
    resetToIdle: () => get().setStatus('idle'),
}));
