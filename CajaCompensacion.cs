namespace CSS.Creaciones.Pajov.Infraestructure.Entities;

public partial class CajaCompensacion
{
    public decimal IdCaja { get; set; }

    public string NombreCaja { get; set; } = null!;

    public string Estado { get; set; } = null!;

    public virtual ICollection<Empleado> Empleados { get; set; } = new List<Empleado>();
}
