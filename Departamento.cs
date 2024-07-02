namespace CSS.Creaciones.Pajov.Infraestructure.Entities;

public partial class Departamento
{
    public decimal IdDepartamento { get; set; }

    public decimal IdPais { get; set; }

    public string NombreDepartamento { get; set; } = null!;

    public string EstadoDepartamento { get; set; } = null!;

    public virtual Pai IdPaisNavigation { get; set; } = null!;

    public virtual ICollection<Municipio> Municipios { get; set; } = new List<Municipio>();
}
