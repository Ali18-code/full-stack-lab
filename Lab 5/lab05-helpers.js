export function getStatus(cgpa) {
  return cgpa >= 3.0 ? "Good Standing" : "Needs Improvement";
}

export function getDiscount(feeAmount) {
  return feeAmount >= 100000 ? feeAmount * 0.10 : feeAmount * 0.05;
}

export default function formatStudent(name, cgpa) {
  return `${name} — CGPA: ${cgpa.toFixed(2)}`;
}
