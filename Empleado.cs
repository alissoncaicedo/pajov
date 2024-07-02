using CSS.Creaciones.Pajov.Domain.Entitites;

namespace CSS.Creaciones.Pajov.Infraestructure.Entities;

public partial class Empleado
{
    public decimal IdEmpleado { get; set; }

    public decimal? IdGenero { get; set; }

    public decimal? IdTipoidentificacion { get; set; }

    public decimal? IdEps { get; set; }

    public decimal? IdPension { get; set; }

    public decimal? IdCaja { get; set; }

    public decimal? IdArl { get; set; }

    public string PrimerNombreEmpleado { get; set; } = null!;

    public string SegundoNombreEmpleado { get; set; } = null!;

    public string PrimerApellidoEmpleado { get; set; } = null!;

    public string SegundoApellidoEmpleado { get; set; } = null!;

    public decimal? IdentificacionEmpleado { get; set; }

    public string CorreoElectronicoPersonalEmpleado { get; set; } = null!;

    public decimal? TelefonoEmpleado { get; set; }

    public decimal? TelefonoEmpleadoEmpleado { get; set; }

    public DateTime? FechaNacimientoEmpleado { get; set; }

    public string MunicipioResidenciaEmpleado { get; set; } = null!;

    public string DireccionEmpleado { get; set; } = null!;

    public virtual Arl? IdArlNavigation { get; set; }

    public virtual CajaCompensacion? IdCajaNavigation { get; set; }

    public virtual Ep? IdEpsNavigation { get; set; }

    public virtual Genero? IdGeneroNavigation { get; set; }

    public virtual FondoPensione? IdPensionNavigation { get; set; }

    public virtual Tipoidentificacion? IdTipoidentificacionNavigation { get; set; }

    public virtual ICollection<Contrato> Contratos { get; set; } = new List<Contrato>();

}
