namespace CSS.Creaciones.Pajov.Infraestructure.Entities;

public partial class FondoPensione
{
    public decimal IdPension { get; set; }

    public string NombrePension { get; set; } = null!;

    public string Estado { get; set; } = null!;

    public virtual ICollection<Empleado> Empleados { get; set; } = new List<Empleado>();
}
