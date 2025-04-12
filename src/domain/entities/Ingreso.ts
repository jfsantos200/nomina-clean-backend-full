export interface Ingreso {
  id?: string;
  empleadoId: string;
  concepto: string;
  monto: number;
  fecha: Date;
}
