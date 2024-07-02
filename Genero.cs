namespace CSS.Creaciones.Pajov.Infraestructure.Entities;

public partial class Genero
{
    public decimal IdGenero { get; set; }

    public string NombreGenero { get; set; } = null!;

    public string EstadoGenero { get; set; } = null!;

    public virtual ICollection<Empleado> Empleados { get; set; } = new List<Empleado>();
}
