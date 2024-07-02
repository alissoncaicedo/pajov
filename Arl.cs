namespace CSS.Creaciones.Pajov.Infraestructure.Entities;

public partial class Arl
{
    public decimal IdArl { get; set; }

    public string NombreArl { get; set; } = null!;

    public bool Estado { get; set; }

    public virtual ICollection<Empleado> Empleados { get; set; } = new List<Empleado>();
}
