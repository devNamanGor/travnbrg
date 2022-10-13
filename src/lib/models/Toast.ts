import type { Nullable } from "./CustomTypes";

export type ToastType = "info" | "success" | "warning" | "error";

export class Toast {
    toastType: ToastType;
    content: string;
    private static element: Nullable<HTMLElement>;
    private id: string = "toasts";
    private static currentVisibleToast: Nullable<HTMLElement>;
    private static text: Nullable<Text>;

    constructor(toastType: ToastType, content: string) {
        this.toastType = toastType;
        this.content = content;
        Toast.element = document.getElementById(this.id);
        console.log(Toast.element);
    }

    public static addToast(toast: Toast, duration?: number): void {
        var e = document.createElement("div");
        e!.className = `alert alert-${toast.toastType}`;
        e!.id = "cvToast";
        Toast.text = document.createTextNode(toast.content);
        e?.appendChild(Toast.text);
        this.currentVisibleToast = e;
        this.element?.appendChild(e);
        setTimeout(() => {
            this.removeToast();
        }, duration ?? 3000);
    }

    private static removeToast() {
        this.element!.removeChild(this.currentVisibleToast!);
    }
}