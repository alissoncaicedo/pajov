namespace CSS.Creaciones.Pajov.Infraestructure.Entities;

public partial class Tipoidentificacion
{
    public decimal IdTipoidentificacion { get; set; }

    public string NombreTipoidentificacion { get; set; } = null!;

    public string EstadoTipoidentificacion { get; set; } = null!;

    public virtual ICollection<Empleado> Empleados { get; set; } = new List<Empleado>();
}
