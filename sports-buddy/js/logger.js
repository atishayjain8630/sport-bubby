export function logAction(action, details = "") {
  const timestamp = new Date().toLocaleString();
  const logMessage = `[${timestamp}] ${action} | Details: ${details}`;
  console.log(logMessage);
}