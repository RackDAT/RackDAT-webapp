export default function getDateString(date: string) {
  //put a 0 in front of the month if it is less than 10

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const formatedDate = new Date(date);
  const year = formatedDate.getFullYear();
  const month = monthNames[formatedDate.getMonth()];
  const day = String(formatedDate.getDate()).padStart(2, "0");

  const dateString = `${day} de ${month} del ${year}`;

  return dateString;
}
