namespace CSS.Creaciones.Pajov.Infraestructure.Entities;

public partial class Ep
{
    public decimal IdEps { get; set; }

    public string NombreEps { get; set; } = null!;

    public bool  Estado { get; set; } 

    public virtual ICollection<Empleado> Empleados { get; set; } = new List<Empleado>();
}
