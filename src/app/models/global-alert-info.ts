export interface GlobalAlertInfo {
  type: "success" | "info" | "warning" | "danger";
  dismissible: boolean;
  title?: string;
  text?: string;
  timeout?: number;  
}